"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DemoModal from "@/components/DemoModal";

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section id="cta" className="py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border-2 border-yellow-600/30">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                지금 시작하고 <span className="text-yellow-400">재주문율 6.5배</span> 올리세요
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                3일 무료 체험으로 리스크 없이 시작하세요.
                카드 등록 없이 바로 사용 가능합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg group"
                  onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                >
                  3일 무료로 시작하기
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-slate-700 hover:bg-slate-800"
                  onClick={() => setIsDemoOpen(true)}
                >
                  데모 보기
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  카드 등록 불필요
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  5분 만에 설정 완료
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  언제든지 취소 가능
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}