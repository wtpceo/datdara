"use client";

import { Bot, EyeOff, Shield, MessageSquare, Clock, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            리뷰 관리,<br />
            <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
              이렇게 편해져요
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            5개 플랫폼 리뷰를 한 곳에서 자동으로 관리하세요
          </p>
        </motion.div>

        {/* Main Features - 2 Big Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* 본질 기능 - AI 자동 답변 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border-2 border-blue-500/30 rounded-3xl p-8 md:p-10 h-full overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Bot className="w-8 h-8 text-blue-400" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-4">
                  <Sparkles className="w-3 h-3" />
                  핵심 기능
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  AI 리뷰 자동 답변
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  리뷰 내용, 별점, 메뉴를 분석해서 <span className="text-white font-semibold">매번 다른 맞춤형 답변</span>을 자동 생성합니다. 버튼 클릭도 필요 없이 100% 자동으로 등록까지.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    5개 플랫폼 통합
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    24시간 자동 모니터링
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 차별화 기능 - 악성 리뷰 숨김 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border-2 border-red-500/30 rounded-3xl p-8 md:p-10 h-full overflow-hidden group hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 차별화 배지 */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                오직 댓다라만
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <EyeOff className="w-8 h-8 text-red-400" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-bold mb-4">
                  <Zap className="w-3 h-3" />
                  차별화 기능
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  악성 리뷰 자동 숨김
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  배민, 쿠팡이츠 공식 기능을 활용해 <span className="text-white font-semibold">별 1~3점 리뷰를 자동으로 숨깁니다</span>. 평균 평점 0.3~0.5점 상승 효과.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    배민/쿠팡이츠 전용
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    공식 기능 활용
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: MessageSquare,
              title: "톤앤매너 학습",
              description: "매장 스타일을 학습해 사장님이 직접 쓴 것 같은 답변",
              color: "purple"
            },
            {
              icon: Clock,
              title: "전략적 답변 타이밍",
              description: "월/수/금 답변으로 고객에게 재노출, 재주문 유도",
              color: "green"
            },
            {
              icon: Shield,
              title: "24시간 모니터링",
              description: "새벽 리뷰도 놓치지 않고 즉시 자동 대응",
              color: "cyan"
            },
            {
              icon: Zap,
              title: "5개 플랫폼 통합",
              description: "배민, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스",
              color: "yellow"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 h-full transition-all duration-300">
                <div className={`w-10 h-10 rounded-lg bg-${feature.color}-500/10 border border-${feature.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <feature.icon className={`w-5 h-5 text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-neutral-900/50 border border-neutral-800 rounded-2xl px-8 py-6">
            <p className="text-neutral-300 font-medium">
              직접 경험해보세요. <span className="text-yellow-400">3일 무료 체험</span>
            </p>
            <button
              onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-red-500/20"
            >
              지금 바로 시작하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
