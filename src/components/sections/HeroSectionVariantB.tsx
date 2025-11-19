"use client";

import { ArrowRight, Star, Shield, Eye, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSectionVariantB() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge - 평점 관리 강조 */}
          <Badge variant="outline" className="mb-6 border-yellow-600/30 bg-yellow-900/20 text-yellow-400">
            <Shield className="w-4 h-4 mr-2" />
            평점 보호 시스템
          </Badge>

          {/* Main headline - 평점 관리 중심 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            별점 관리만 잘해도
            <br />
            <span className="text-yellow-400">매출 2배</span> 차이납니다
          </h1>

          {/* Sub headline - 평점 보호 강조 */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            별 1~3점 자동 숨김으로 <span className="text-green-400 font-semibold">평균 0.5점 상승</span>
            <br />
            악플 스트레스는 제로, 평점은 상승
          </p>

          {/* 평점 관리 핵심 기능 강조 */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <motion.div
              className="flex items-center justify-center gap-2 bg-yellow-900/20 border border-yellow-600/30 rounded-lg px-4 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <Eye className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">별 1~3점 자동 숨김</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-2 bg-green-900/20 border border-green-600/30 rounded-lg px-4 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">평균 0.3~0.5점 상승</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-2 bg-blue-900/20 border border-blue-600/30 rounded-lg px-4 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">악플 스트레스 제로</span>
            </motion.div>
          </div>

          {/* 별점 시각화 */}
          <motion.div
            className="mb-10 p-6 bg-slate-800/50 border border-slate-700 rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-2">숨기기 전</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-red-400">4.2점</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-2">댓다라 사용 후</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-6 h-6 fill-yellow-400/50 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">4.7점</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">평균 0.5점 상승 = 노출 순위 ↑ = 매출 ↑</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg font-bold group"
              onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
            >
              3일 무료로 평점 보호 시작
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-slate-700 hover:bg-slate-800"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              평점 관리 사례 보기
            </Button>
          </div>

          {/* Trust indicators - 평점 관련 통계 강조 */}
          <div className="mt-12 pt-12 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">+0.5점</div>
                <div className="text-gray-400">평균 평점 상승</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-gray-400">악플 자동 숨김 성공률</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">24시간</div>
                <div className="text-gray-400">실시간 평점 모니터링</div>
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
