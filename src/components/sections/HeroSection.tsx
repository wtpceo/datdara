"use client";

import { ArrowRight, EyeOff, Bot, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,204,21,0.1),transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - 차별화 포인트 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-400 font-medium text-sm">5개 플랫폼 리뷰 자동 답변 서비스</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            <span className="block mb-2">리뷰 답변은 기본,</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                악성 리뷰는 숨김.
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h1>

          {/* Sub headline */}
          <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            다른 곳은 리뷰 답변만 해줘요.<br />
            댓다라는 <span className="text-red-400 font-semibold">악성 리뷰 숨김 처리</span>까지 자동으로.
          </p>
          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
            배민, 쿠팡이츠 공식 기능 활용 · 평점 0.3~0.5점 상승 효과
          </p>

          {/* Key Features - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group bg-neutral-900/80 border border-neutral-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Bot className="w-7 h-7 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">AI 맞춤 답변</div>
              <div className="text-neutral-400 text-sm">리뷰 내용 분석 후 자동 생성</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group bg-neutral-900/80 border border-neutral-800 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hot badge */}
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                HOT
              </div>
              <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <EyeOff className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">악성 리뷰 숨김</div>
              <div className="text-neutral-400 text-sm">별 1~3점 자동 숨김 처리</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group bg-neutral-900/80 border border-neutral-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">5개 플랫폼</div>
              <div className="text-neutral-400 text-sm">한 곳에서 통합 관리</div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-8 text-lg font-bold rounded-2xl group shadow-2xl shadow-red-500/30 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
            >
              3일 무료로 시작하기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-neutral-500 text-sm">
              카드 등록 없이 바로 시작 · 언제든 취소 가능
            </p>
          </motion.div>

          {/* Platform Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-10 border-t border-neutral-800/50"
          >
            <p className="text-neutral-600 text-sm mb-6 uppercase tracking-wider">지원 플랫폼</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {[
                { name: "배민", color: "#2AC1BC" },
                { name: "쿠팡이츠", color: "#00C4B3" },
                { name: "요기요", color: "#FA0050" },
                { name: "땡겨요", color: "#FF6B35" },
                { name: "네이버", color: "#03C75A" }
              ].map((platform, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-xl text-sm font-bold"
                  style={{
                    backgroundColor: `${platform.color}15`,
                    border: `1px solid ${platform.color}40`,
                    color: platform.color
                  }}
                >
                  {platform.name}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-neutral-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
