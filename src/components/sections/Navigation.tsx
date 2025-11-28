"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "features", label: "기능" },
    { id: "pricing", label: "가격" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:opacity-80 transition-opacity"
              >
                <Logo size="md" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-400 hover:text-white px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-red-500/20"
              >
                <Zap className="w-4 h-4" />
                무료 시작
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-400 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-72 bg-neutral-900 border-l border-neutral-800 p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-300 hover:text-white hover:bg-neutral-800 px-4 py-3 rounded-xl transition-all text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-neutral-800 my-4" />
              <button
                onClick={() => {
                  window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                3일 무료 시작하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
