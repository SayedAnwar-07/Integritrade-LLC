#!/usr/bin/env bash
# One-shot setup for the GitHub Actions deploy secrets.
#
#   bash scripts/setup-ci-secrets.sh
#
# Reads the NEXT_PUBLIC_* values straight out of .env.local, prompts for the FTP
# password (never echoed, never written to disk), and pushes everything to the
# repo's Actions secrets.
#
# Requires ADMIN on the repo. Plain write access is not enough to set secrets.

set -euo pipefail

REPO="${REPO:-SayedAnwar-07/Integritrade-LLC}"
ENV_FILE="${ENV_FILE:-.env.local}"
FTP_HOST_VALUE="151.106.121.17"
FTP_USER_VALUE="u578716036"

cd "$(dirname "$0")/.."

command -v gh >/dev/null || { echo "gh CLI not found. Install it first."; exit 1; }
[ -f "$ENV_FILE" ] || { echo "$ENV_FILE not found — run this from the repo root."; exit 1; }

echo "Repo: $REPO"
if ! gh api "repos/$REPO" --jq '.permissions.admin' 2>/dev/null | grep -q true; then
  echo
  echo "You do not have ADMIN on $REPO — secrets cannot be set."
  echo "Ask the repo owner to grant admin, or to add the secrets listed below by hand."
  echo
fi

# Pull a single KEY=value out of the env file, ignoring comments.
env_value() {
  sed -n "s/^$1=//p" "$ENV_FILE" | head -1 | sed 's/[[:space:]]*$//'
}

set_secret() {
  local name="$1" value="$2"
  if [ -z "$value" ]; then
    echo "  SKIP  $name (no value found)"
    return
  fi
  if gh secret set "$name" --repo "$REPO" --body "$value" >/dev/null 2>&1; then
    echo "  OK    $name"
  else
    echo "  FAIL  $name (admin required?)"
  fi
}

echo
echo "Booking-form keys from $ENV_FILE:"
for key in \
  NEXT_PUBLIC_BOOKING_EMAILJS_SERVICE_ID \
  NEXT_PUBLIC_BOOKING_EMAILJS_TEMPLATE_ID \
  NEXT_PUBLIC_BOOKING_EMAILJS_PUBLIC_KEY \
  NEXT_PUBLIC_MAKE_WEBHOOK_URL
do
  set_secret "$key" "$(env_value "$key")"
done

echo
echo "FTP credentials:"
set_secret FTP_HOST "$FTP_HOST_VALUE"
set_secret FTP_USER "$FTP_USER_VALUE"

echo
echo "Rotate the FTP password in hPanel FIRST (Files -> FTP Accounts -> Change"
echo "FTP password), then paste the NEW one here. The old one has been used in"
echo "plaintext and should not be reused."
printf "New FTP password (hidden): "
read -rs FTP_PASSWORD_VALUE
echo
set_secret FTP_PASSWORD "$FTP_PASSWORD_VALUE"
unset FTP_PASSWORD_VALUE

echo
echo "Done. Current secrets:"
gh secret list --repo "$REPO" 2>/dev/null || echo "  (cannot list — admin required)"
echo
echo "Next: push .github/workflows/deploy.yml, then watch the run with"
echo "  gh run watch --repo $REPO"
