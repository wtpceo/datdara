"use client";

import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PricingSectionVariantC() {
  const plans = [
    {
      name: "스타터",
      price: "29,000",
      realTalk: "하루 커피값보다 쌈",
      description: "일단 써보고 싶은 사장님",
      features: [
        "배민, 쿠팡이츠 지원",
        "리뷰 무제한",
        "AI 자동 답변",
        "기본 톤앤매너",
      ],
      popular: false,
      emoji: "🌱"
    },
    {
      name: "프로",
      price: "49,000",
      realTalk: "ㄹㅇ 가성비 미쳤음",
      description: "진심으로 추천하는 플랜",
      features: [
        "5개 플랫폼 전부",
        "리뷰 무제한",
        "악플 자동 숨김",
        "매장 맞춤 답변",
        "리뷰 분석 대시보드",
      ],
      popular: true,
      emoji: "🔥"
    },
    {
      name: "비즈니스",
      price: "99,000",
      realTalk: "여러 매장 운영하면 이거",
      description: "다점포/프랜차이즈",
      features: [
        "위에 있는 거 다 포함",
        "다점포 통합 관리",
        "전담 매니저",
        "카톡 알림",
        "맞춤 컨설팅",
      ],
      popular: false,
      emoji: "👑"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            가격 <span className="text-yellow-400">ㅈㄴ 싸다</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            알바 한명 쓰는 비용보다 쌈 ㅋㅋ
          </p>
          <Badge className="border-green-600/30 bg-green-900/20 text-green-400">
            3일 무료체험 <Check className="w-4 h-4 ml-2" />
          </Badge>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, rotate: plan.popular ? 0 : index % 2 === 0 ? -2 : 2 }}
              className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
            >
              <Card className={`bg-slate-900 border-2 ${
                plan.popular ? 'border-yellow-500' : 'border-slate-700'
              } h-full flex flex-col relative overflow-visible p-6 md:p-8`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-yellow-400 text-black font-bold px-4 py-1">
                      🔥 제일 많이 씀
                    </Badge>
                  </div>
                )}

                {/* Emoji */}
                <div className="text-5xl mb-4 text-center">
                  {plan.emoji}
                </div>

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {plan.description}
                  </p>

                  {/* Real Talk */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 mb-4 inline-block">
                    <span className="text-yellow-400 text-sm font-medium">
                      {plan.realTalk}
                    </span>
                  </div>

                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      ₩{plan.price}
                    </span>
                    <span className="text-gray-400 text-lg mb-2">/월</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    = 하루 {Math.floor(parseInt(plan.price.replace(/,/g, '')) / 30).toLocaleString()}원
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-base md:text-lg font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black font-bold'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                  onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                >
                  {plan.popular ? '일단 써보기' : '3일 무료 시작'}
                  {plan.popular && <Zap className="ml-2 w-4 h-4" />}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 가성비 계산 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20 border-2 border-green-600/30 p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              간단한 계산
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
              <div>
                <div className="text-gray-400 text-xs md:text-sm mb-1">하루 절약 시간</div>
                <div className="text-xl md:text-2xl font-bold text-green-400">2시간</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs md:text-sm mb-1">월 비용 (프로)</div>
                <div className="text-xl md:text-2xl font-bold text-yellow-400">₩49,000</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs md:text-sm mb-1">시급 환산</div>
                <div className="text-xl md:text-2xl font-bold text-blue-400">₩816</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-gray-300 text-base md:text-lg px-2">
                시급 816원에 <span className="text-yellow-400 font-bold">24시간 일하는 직원</span> 고용하는 셈
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-2 px-2">
                알바 한명 쓰면 월 200만원인데 ㅋㅋ
              </p>
            </div>
          </Card>
        </motion.div>

        {/* 환불 보장 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">
              효과 없으면 <span className="text-green-400 font-bold">100% 환불</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
