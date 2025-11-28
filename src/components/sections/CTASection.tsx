"use client";

import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(250,204,21,0.08),transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900/80 border-2 border-red-500/30 rounded-3xl p-10 md:p-16 text-center overflow-hidden group">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-yellow-500/5" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">지금 바로 시작하세요</span>
              </motion.div>

              {/* Main Copy */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                악성 리뷰,<br />
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  더 이상 스트레스 받지 마세요
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                3일 무료 체험으로 효과를 직접 확인하세요.<br className="hidden md:block" />
                배민, 쿠팡이츠 리뷰 관리의 새로운 기준.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-14 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
              >
                3일 무료로 시작하기
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust Points */}
              <div className="flex flex-col md:flex-row gap-6 justify-center mt-10 text-neutral-400">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>카드 등록 불필요</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>5분 만에 설정 완료</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>30일 환불 보장</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
