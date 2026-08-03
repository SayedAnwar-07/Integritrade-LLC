import { 
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";


const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/IntegritradeLLC/",
    icon: FaFacebookF,
    color: "bg-[#1877F2]",
  },
  {
    name: "X",
    href: "https://x.com/integritrade",
    icon: FaXTwitter,
    color: "bg-black",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/integritrade",
    icon: FaLinkedinIn,
    color: "bg-[#0A66C2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/integritrade/",
    icon: FaInstagram,
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@integritrade",
    icon: FaTiktok,
    color: "bg-black",
  },
];


export default function SocialAddress() {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    text-white/80
                    hover:text-white
                    hover:scale-110
                    transition-all
                    duration-300
                    border p-2 rounded-md border-white/20
                    "
                  >
                  <Icon className="h-4 w-4" />
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={8}
                className={`
                    ${social.color}
                    text-white
                    border-none
                    text-xs
                    font-medium
                    px-3
                    py-1.5
                    rounded-md
                    shadow-lg
                `}
                >
                {social.name}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}