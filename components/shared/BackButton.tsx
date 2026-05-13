"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        inline-flex items-center gap-2
        rounded-lg border border-white/20
        bg-white/10 px-4 py-2
        text-sm font-medium text-white
        backdrop-blur
        transition-all duration-200
        hover:bg-white/20 hover:-translate-x-1
        active:translate-x-0 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/30
      "
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
