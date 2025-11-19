"use client";

import { MessageSquare } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: {
      container: "text-lg",
      icon: "w-5 h-5",
      text: "text-lg"
    },
    md: {
      container: "text-xl",
      icon: "w-6 h-6",
      text: "text-xl"
    },
    lg: {
      container: "text-2xl md:text-3xl",
      icon: "w-8 h-8 md:w-10 md:h-10",
      text: "text-2xl md:text-3xl"
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${currentSize.container} ${className}`}>
      {/* Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-md opacity-50" />
        <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-2 rounded-lg">
          <MessageSquare className={`${currentSize.icon} text-slate-900`} strokeWidth={2.5} />
        </div>
      </div>

      {/* Text */}
      <div className={`font-bold ${currentSize.text}`}>
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
          댓
        </span>
        <span className="text-white">다라</span>
      </div>
    </div>
  );
}
