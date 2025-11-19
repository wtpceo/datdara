"use client";

import { Bot, Calendar, Eye, MessageSquare, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI 맞춤 답변 생성",
      description: "리뷰 내용, 별점, 메뉴를 분석해 매번 다른 진정성 있는 답변을 자동 생성합니다. 타사와 달리 버튼 클릭 없이 100% 자동으로 등록까지 완료됩니다.",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "월/수/금 징검다리 답변",
      description: "하루 건너 답변으로 알림 타이밍을 최적화해 재주문 가능성을 극대화합니다.",
      color: "green"
    },
    {
      icon: Eye,
      title: "별점 자동 숨김",
      description: "별 1~3점 리뷰를 자동으로 숨겨 평균 평점을 0.3~0.5점 상승시킵니다.",
      color: "yellow"
    },
    {
      icon: MessageSquare,
      title: "매장 톤앤매너 학습",
      description: "매장의 스타일과 톤을 학습해 매장만의 색깔이 담긴 답변을 생성합니다.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "5개 플랫폼 통합",
      description: "배민, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스를 한 곳에서 관리합니다.",
      color: "red"
    },
    {
      icon: Shield,
      title: "24시간 자동 모니터링",
      description: "새벽 리뷰도 놓치지 않고 자동으로 답변 등록합니다.",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-400 bg-blue-900/20",
      green: "text-green-400 bg-green-900/20",
      yellow: "text-yellow-400 bg-yellow-900/20",
      purple: "text-purple-400 bg-purple-900/20",
      red: "text-red-400 bg-red-900/20",
      cyan: "text-cyan-400 bg-cyan-900/20"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            강력한 <span className="text-yellow-400">자동화 기능</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            댓다라의 핵심 기능으로 리뷰 관리를 완전히 자동화하세요
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 h-full p-6 md:p-8">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4 md:mb-6`}>
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            모든 기능을 3일 동안 무료로 체험해보세요
          </p>
          <button
            onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center gap-2"
          >
            무료로 시작하기
            <Zap className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
