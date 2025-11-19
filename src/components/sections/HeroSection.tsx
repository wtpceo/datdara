"use client";

import { ArrowRight, Star, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-red-600/30 bg-red-900/20 text-red-400">
            배민 공식 통계 기반
          </Badge>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            리뷰 답변 관리만 잘해도
            <br />
            <span className="text-yellow-400">재주문율 6.5배</span> 상승
          </h1>

          {/* Sub headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            월/수/금 답변 타이밍으로 재주문 유도
            <br />
            별점 보호, 시간 절약까지 한번에
          </p>

          {/* Key features */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>별 3점 이하 자동 숨김</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>평균 0.3~0.5점 상승</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>5개 플랫폼 통합 관리</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg group"
              onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
            >
              3일 무료로 시작하기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-slate-700 hover:bg-slate-800"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              자세히 알아보기
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">활성 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10,000+</div>
                <div className="text-gray-400">월간 처리 리뷰</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2시간</div>
                <div className="text-gray-400">일일 시간 절약</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}