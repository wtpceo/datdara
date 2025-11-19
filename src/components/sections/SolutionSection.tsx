"use client";

import { TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SolutionSection() {
  const solutions = [
    {
      icon: TrendingUp,
      label: "본질",
      title: "재주문율 6.5배 상승",
      description: "모든 리뷰에 빠짐없이 답변, 매장 톤에 맞춘 맞춤 답변",
      features: [
        "배민 공식 통계 기반",
        "AI 맞춤형 답변 생성",
        "매장별 톤앤매너 학습",
        "진정성 있는 답변"
      ],
      color: "yellow",
      stats: "6.5x",
      highlight: true
    },
    {
      icon: Shield,
      label: "킬러 피처",
      title: "평점 보호 시스템",
      description: "별 3점 이하 자동 숨김으로 평균 0.3~0.5점 상승",
      features: [
        "별 1~3점 자동 숨김",
        "숨긴 리뷰도 답변 등록",
        "평균 평점 0.3~0.5점 상승",
        "악플 스트레스 제로"
      ],
      color: "red",
      stats: "+0.5",
      highlight: true
    },
    {
      icon: Clock,
      label: "효율",
      title: "시간 절약 자동화",
      description: "월/수/금 징검다리 답변으로 재주문 타이밍 최적화",
      features: [
        "하루 평균 2시간 절약",
        "5개 플랫폼 통합 관리",
        "알림 타이밍 맞춰 재주문 유도",
        "24시간 자동 모니터링"
      ],
      color: "blue",
      stats: "-2H",
      highlight: false
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'yellow':
        return {
          badge: 'bg-yellow-900/20 text-yellow-400 border-yellow-600/30',
          icon: 'text-yellow-400 bg-yellow-900/20',
          border: 'border-yellow-600/30',
          check: 'text-yellow-400',
          stats: 'text-yellow-400'
        };
      case 'red':
        return {
          badge: 'bg-red-900/20 text-red-400 border-red-600/30',
          icon: 'text-red-400 bg-red-900/20',
          border: 'border-red-600/30',
          check: 'text-red-400',
          stats: 'text-red-400'
        };
      default:
        return {
          badge: 'bg-blue-900/20 text-blue-400 border-blue-600/30',
          icon: 'text-blue-400 bg-blue-900/20',
          border: 'border-blue-600/30',
          check: 'text-blue-400',
          stats: 'text-blue-400'
        };
    }
  };

  return (
    <section id="solution" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 px-2">
            댓다라가 <span className="text-yellow-400">모든 문제</span>를<br className="md:hidden" /> 해결합니다
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            리뷰 답변 자동화 + 징검다리 답변 전략 +<br className="sm:hidden" /> 별점 숨기기 =<br className="sm:hidden" /> 재주문율 상승 & 평점 보호
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${solution.highlight ? 'lg:scale-105' : ''}`}
              >
                <Card className={`bg-slate-800 border-2 ${colors.border} h-full relative overflow-hidden`}>
                  {solution.highlight && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                      BEST
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className={colors.badge}>
                        {solution.label}
                      </Badge>
                      <div className={`text-3xl font-bold ${colors.stats}`}>
                        {solution.stats}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${colors.icon} w-fit mb-4`}>
                      <solution.icon className="w-8 h-8" />
                    </div>

                    <CardTitle className="text-white text-xl">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.check}`} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Result Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-red-900/20 via-yellow-900/20 to-green-900/20 border-2 border-yellow-600/30">
            <CardContent className="p-8 text-center">
              <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white px-4 leading-relaxed">
                재주문율 ↑ + 평점 ↑ =<br className="sm:hidden" /> 배민 노출 ↑ =<br className="sm:hidden" /> <span className="text-yellow-400">매출 ↑</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}