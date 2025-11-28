"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "어떤 플랫폼을 지원하나요?",
      answer: "배달의민족, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스 5개 플랫폼을 모두 지원합니다. 한 곳에서 모든 플랫폼의 리뷰를 통합 관리할 수 있어요."
    },
    {
      question: "악성 리뷰 숨김 기능이 불법 아닌가요?",
      answer: "전혀 아닙니다. 배민과 쿠팡이츠가 공식적으로 제공하는 기능입니다. 사장님이 직접 매장 관리 페이지에서 리뷰를 숨길 수 있는데, 댓다라가 이걸 자동화해드리는 거예요. 숨긴 리뷰에도 답변은 등록되어서 고객과의 소통은 계속됩니다."
    },
    {
      question: "봇처럼 똑같은 답변만 달리지 않나요?",
      answer: "아닙니다. AI가 리뷰 내용, 별점, 주문한 메뉴까지 분석해서 매번 다른 답변을 생성해요. 거기다 매장의 말투와 스타일까지 학습해서 사장님이 직접 쓴 것 같은 자연스러운 답변을 만들어냅니다."
    },
    {
      question: "설치나 설정이 복잡하지 않나요?",
      answer: "카카오톡으로 문의하시면 저희가 다 해드려요. 플랫폼 계정 정보만 주시면 5분이면 설정 끝나고 바로 자동화가 시작됩니다."
    },
    {
      question: "내 플랫폼 계정 정보는 안전한가요?",
      answer: "모든 계정 정보는 AES-256 암호화되어 저장됩니다. 오직 리뷰 관리 목적으로만 사용되고, 다른 곳에 절대 공유되지 않아요."
    },
    {
      question: "베이직과 프로 플랜의 차이가 뭔가요?",
      answer: "베이직은 5개 플랫폼 AI 자동 답변 기능을 제공하고, 프로는 여기에 악성 리뷰 자동 숨김(배민/쿠팡이츠)과 전략적 답변 타이밍 기능이 추가됩니다. 악성 리뷰 관리가 필요하시면 프로를 추천드려요."
    },
    {
      question: "효과가 없으면 어떻게 하나요?",
      answer: "3일 무료 체험으로 먼저 확인해보세요. 리뷰 답변이 자동으로 달리고, 프로 플랜이면 악성 리뷰가 숨겨지는 걸 직접 보실 수 있어요. 만족 못하시면 무료 기간 내 언제든 취소할 수 있습니다."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-neutral-950 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,64,64,0.1),transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-neutral-400">
            궁금한 점이 있으신가요?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-neutral-800 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-white hover:text-yellow-400 px-6 py-5 text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-400 px-6 pb-5 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 mb-4">
            더 궁금한 점이 있으신가요?
          </p>
          <button
            onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
            className="text-yellow-400 hover:text-yellow-300 font-semibold underline underline-offset-4 transition-colors"
          >
            카카오톡으로 문의하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
