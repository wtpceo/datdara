"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "스타터",
      price: "29,000",
      description: "개인 사장님을 위한 기본 플랜",
      features: [
        { text: "배민, 쿠팡이츠 지원", included: true },
        { text: "일일 리뷰 무제한", included: true },
        { text: "AI 답변 생성", included: true },
        { text: "기본 톤앤매너", included: true },
        { text: "이메일 지원", included: true },
        { text: "요기요, 땡겨요 지원", included: false },
        { text: "별점 숨기기", included: false },
        { text: "맞춤 톤앤매너", included: false },
        { text: "우선 지원", included: false }
      ],
      popular: false
    },
    {
      name: "프로",
      price: "49,000",
      description: "성장하는 매장을 위한 인기 플랜",
      features: [
        { text: "5개 플랫폼 모두 지원", included: true },
        { text: "일일 리뷰 무제한", included: true },
        { text: "AI 답변 생성", included: true },
        { text: "별점 숨기기", included: true },
        { text: "맞춤 톤앤매너", included: true },
        { text: "리뷰 분석 대시보드", included: true },
        { text: "다점포 관리", included: false },
        { text: "카톡 알림", included: false }
      ],
      popular: true
    },
    {
      name: "비즈니스",
      price: "99,000",
      description: "다점포/프랜차이즈를 위한 플랜",
      features: [
        { text: "5개 플랫폼 모두 지원", included: true },
        { text: "일일 리뷰 무제한", included: true },
        { text: "AI 답변 생성", included: true },
        { text: "별점 숨기기", included: true },
        { text: "맞춤 톤앤매너", included: true },
        { text: "전담 매니저 지원", included: true },
        { text: "리뷰 분석 대시보드", included: true },
        { text: "카톡 알림", included: true },
        { text: "다점포 통합 관리", included: true }
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-slate-900">
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
            합리적인 가격, <span className="text-yellow-400">확실한 효과</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            3일 무료 체험으로 먼저 효과를 확인하세요
          </p>
          <Badge className="border-green-600/30 bg-green-900/20 text-green-400 hover:bg-green-900/30">
            <Check className="w-4 h-4 mr-2" />
            언제든지 취소 가능
          </Badge>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
            >
              <Card className={`bg-slate-800 border-2 ${
                plan.popular ? 'border-yellow-500 shadow-2xl shadow-yellow-500/10' : 'border-slate-700'
              } h-full flex flex-col relative overflow-visible p-6 md:p-8`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-yellow-400 text-black font-bold hover:bg-yellow-400 px-4 py-1">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      ₩{plan.price}
                    </span>
                    <span className="text-gray-400 text-lg mb-2">/월</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm md:text-base ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature.text}
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
                      ? 'bg-red-600 hover:bg-red-700 text-white font-bold'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                  onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                >
                  3일 무료 시작
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-2 border-green-600/30 p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              100% 환불 보장
            </h3>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              3일 무료 체험 기간 동안 효과를 직접 확인하세요.
              만족하지 못하시면 언제든 취소 가능하며, 유료 전환 후에도 30일 이내 환불을 보장합니다.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
