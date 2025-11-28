"use client";

import { Check, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "베이직",
      price: "39,000",
      description: "리뷰 자동 답변만 필요한 분",
      badge: null,
      features: [
        { text: "5개 플랫폼 리뷰 자동 답변", included: true, highlight: false },
        { text: "AI 맞춤 답변 생성", included: true, highlight: false },
        { text: "매장 톤앤매너 학습", included: true, highlight: false },
        { text: "24시간 모니터링", included: true, highlight: false },
        { text: "카카오톡 알림", included: true, highlight: false },
        { text: "악성 리뷰 자동 숨김", included: false, highlight: false },
        { text: "전략적 답변 타이밍", included: false, highlight: false }
      ],
      buttonStyle: "bg-neutral-800 hover:bg-neutral-700 text-white",
      borderStyle: "border-neutral-800"
    },
    {
      name: "프로",
      price: "49,000",
      description: "악성 리뷰 숨김까지 원하는 분",
      badge: "추천",
      features: [
        { text: "5개 플랫폼 리뷰 자동 답변", included: true, highlight: false },
        { text: "AI 맞춤 답변 생성", included: true, highlight: false },
        { text: "매장 톤앤매너 학습", included: true, highlight: false },
        { text: "24시간 모니터링", included: true, highlight: false },
        { text: "카카오톡 알림", included: true, highlight: false },
        { text: "악성 리뷰 자동 숨김 (배민/쿠팡)", included: true, highlight: true },
        { text: "월/수/금 전략적 답변", included: true, highlight: false }
      ],
      buttonStyle: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25",
      borderStyle: "border-yellow-500/40"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(250,204,21,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            심플한 가격,<br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              확실한 효과
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400">
            필요한 기능만 선택하세요
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-full text-sm shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className={`bg-neutral-900/70 border-2 ${plan.borderStyle} rounded-3xl p-8 h-full relative overflow-hidden group hover:border-neutral-700 transition-all duration-300 ${plan.badge ? 'pt-10' : ''}`}>
                {plan.badge && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
                )}

                <div className="relative z-10">
                  {/* Plan Name & Price */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-neutral-500 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-5xl font-black text-white">₩{plan.price}</span>
                      <span className="text-neutral-500 mb-2">/월</span>
                    </div>
                    <p className="text-neutral-600 text-xs mt-1">매장당 · VAT 별도</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.included
                            ? feature.highlight
                              ? 'bg-red-500/20'
                              : 'bg-green-500/20'
                            : 'bg-neutral-800'
                        }`}>
                          {feature.included ? (
                            <Check className={`w-3 h-3 ${feature.highlight ? 'text-red-400' : 'text-green-400'}`} />
                          ) : (
                            <div className="w-1.5 h-0.5 bg-neutral-600 rounded" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          feature.included
                            ? feature.highlight
                              ? 'text-white font-semibold'
                              : 'text-neutral-300'
                            : 'text-neutral-600'
                        }`}>
                          {feature.text}
                        </span>
                        {feature.highlight && (
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-medium">
                            핵심
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className={`w-full py-6 text-base font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] ${plan.buttonStyle}`}
                    onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                  >
                    3일 무료 체험
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-store Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl px-6 py-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <p className="text-neutral-300">
              <span className="font-semibold text-white">다점포 운영</span> 하시나요?{" "}
              <button
                onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                className="text-yellow-400 hover:text-yellow-300 font-semibold underline underline-offset-4"
              >
                문의하기
              </button>
              {" "}하시면 할인 안내드려요.
            </p>
          </div>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              3일 무료 체험으로 직접 확인하세요
            </h3>
            <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
              카드 등록 없이 바로 시작할 수 있어요.<br />
              <span className="text-white font-semibold">리뷰 답변이 자동으로 달리는 걸</span> 직접 경험해보세요.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
