"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  const faqs = [
    {
      question: "정말 재주문율이 6.5배나 오르나요?",
      answer: "네, 배민 공식 통계에 따르면 리뷰 답변을 잘 관리하는 매장의 재주문율이 평균 6.5배 상승합니다. 댓다라는 모든 리뷰에 빠짐없이 맞춤형 답변을 등록해 이 효과를 극대화합니다."
    },
    {
      question: "별점 숨기기 기능이 불법 아닌가요?",
      answer: "아닙니다. 배민과 쿠팡이츠는 사장님이 직접 리뷰를 숨길 수 있는 기능을 제공합니다. 댓다라는 이 공식 기능을 자동화한 것뿐입니다. 숨긴 리뷰에도 답변은 등록되어 고객과의 소통은 계속됩니다."
    },
    {
      question: "봇처럼 똑같은 답변만 달리지 않나요?",
      answer: "아닙니다. AI가 리뷰 내용, 별점, 메뉴를 분석해 매번 다른 답변을 생성합니다. 또한 월/수/금 징검다리 답변으로 자연스러움을 극대화하고, 매장별 톤앤매너를 학습해 진정성 있는 답변을 만듭니다."
    },
    {
      question: "어떤 플랫폼을 지원하나요?",
      answer: "배달의민족, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스 5개 플랫폼을 지원합니다. 한 곳에서 모든 플랫폼의 리뷰를 통합 관리할 수 있습니다."
    },
    {
      question: "설치나 설정이 복잡하지 않나요?",
      answer: "매우 간단합니다. 플랫폼 계정 연동 후 답변 스타일만 선택하면 끝입니다. 5분이면 설정이 완료되고, 바로 자동화가 시작됩니다."
    },
    {
      question: "내 플랫폼 계정 정보는 안전한가요?",
      answer: "모든 계정 정보는 AES-256 암호화되어 저장되며, 오직 리뷰 관리 목적으로만 사용됩니다. 또한 2단계 인증을 지원해 보안을 강화했습니다."
    },
    {
      question: "언제든지 취소할 수 있나요?",
      answer: "네, 언제든지 구독을 취소할 수 있습니다. 3일 무료 체험 기간 중에는 과금되지 않으며, 유료 전환 후에도 30일 이내 환불을 보장합니다."
    },
    {
      question: "효과가 없으면 어떻게 하나요?",
      answer: "3일 무료 체험으로 먼저 효과를 확인하세요. 만약 효과가 없다면 언제든 취소 가능하며, 유료 전환 후에도 30일 이내 100% 환불해드립니다."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-400">
            댓다라에 대해 궁금한 점을 확인하세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900 border-slate-700">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-700">
                  <AccordionTrigger className="text-left text-white hover:text-yellow-400 px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            더 궁금한 점이 있으신가요?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-slate-700 hover:bg-slate-800"
              asChild
            >
              <a href="mailto:support@daetdara.com">
                이메일 문의하기
              </a>
            </Button>
            <Button
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
              asChild
            >
              <a href="https://open.kakao.com/daetdara">
                카톡 채널 문의
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}