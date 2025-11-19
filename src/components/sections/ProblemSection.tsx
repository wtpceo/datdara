"use client";

import { Clock, TrendingDown, AlertCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "시간이 없어요",
      description: "하루 10~30개 리뷰, 새벽/심야 리뷰는 놓치기 일쑤",
      pain: "매일 2시간 소모",
      color: "blue"
    },
    {
      icon: TrendingDown,
      title: "재주문율이 떨어져요",
      description: "리뷰 답변 없으면 재주문율 급감, 반복 답변으로 진정성 의심",
      pain: "매출 직격탄",
      color: "red"
    },
    {
      icon: AlertCircle,
      title: "평점 스트레스",
      description: "별 1~3점 하나에 평점 급락, 악플 알림에 심장 쫄깃",
      pain: "노출 순위 하락",
      color: "yellow"
    },
    {
      icon: Smartphone,
      title: "5개 플랫폼 관리",
      description: "배민, 쿠팡, 요기요... 플랫폼 돌아다니며 확인",
      pain: "관리 지옥",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          card: 'border-blue-600/30 bg-blue-900/10',
          icon: 'text-blue-400 bg-blue-900/20',
          badge: 'bg-blue-900/20 text-blue-400 border-blue-600/30'
        };
      case 'red':
        return {
          card: 'border-red-600/30 bg-red-900/10',
          icon: 'text-red-400 bg-red-900/20',
          badge: 'bg-red-900/20 text-red-400 border-red-600/30'
        };
      case 'yellow':
        return {
          card: 'border-yellow-600/30 bg-yellow-900/10',
          icon: 'text-yellow-400 bg-yellow-900/20',
          badge: 'bg-yellow-900/20 text-yellow-400 border-yellow-600/30'
        };
      default:
        return {
          card: 'border-green-600/30 bg-green-900/10',
          icon: 'text-green-400 bg-green-900/20',
          badge: 'bg-green-900/20 text-green-400 border-green-600/30'
        };
    }
  };

  return (
    <section id="problem" className="py-16 md:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            새벽 3시, <span className="text-red-400">별 2개</span> 알림이 울립니다
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            리뷰 관리하다 하루가 다 가는 사장님들의 현실
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const colors = getColorClasses(problem.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`${colors.card} border-2 hover:scale-105 transition-transform h-full`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${colors.icon} rounded-lg`}>
                        <problem.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-2">
                          {problem.title}
                        </CardTitle>
                        <p className="text-gray-300 mb-3">{problem.description}</p>
                        <Badge variant="outline" className={colors.badge}>
                          {problem.pain}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Current solution problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-slate-900 border-2 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                기존 솔루션의 문제점
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-red-400 text-3xl font-bold mb-2">월 30만원~</div>
                  <div className="text-gray-400">대행 서비스 비용</div>
                  <div className="text-gray-500 text-sm mt-2">비싸고 응답 느림</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 text-3xl font-bold mb-2">봇 티 100%</div>
                  <div className="text-gray-400">기존 자동화 툴</div>
                  <div className="text-gray-500 text-sm mt-2">매일 똑같은 답변</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 text-3xl font-bold mb-2">2시간+</div>
                  <div className="text-gray-400">직접 관리</div>
                  <div className="text-gray-500 text-sm mt-2">시간 소모, 스트레스</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}