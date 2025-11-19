"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Star, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSectionVariantC() {
  const [showNotification, setShowNotification] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowNotification(true), 1000);
    const timer2 = setTimeout(() => setShowReview(true), 2500);
    const timer3 = setTimeout(() => setShowSolution(true), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* 새벽 느낌 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />

      {/* 휴대폰 알림 시뮬레이션 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* 시간 표시 - 3단계 임팩트 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 1],
              scale: [0.5, 2.5, 2.5, 0.3],
              y: [0, 0, 0, -20],
              rotate: [0, -5, 5, -5, 5, 0]
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.5, 1],
              ease: "easeInOut"
            }}
            className="text-red-400 text-6xl md:text-8xl font-bold mb-4 font-mono"
          >
            03:27 AM
          </motion.div>

          {/* 핸드폰 진동 효과 */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -50 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  rotate: [0, -2, 2, -2, 0]
                }}
                transition={{
                  rotate: {
                    duration: 0.4,
                    repeat: 3,
                    ease: "easeInOut"
                  }
                }}
                className="max-w-md mx-auto mb-8"
              >
                {/* iOS 알림창 스타일 */}
                <div className="bg-slate-800/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white font-semibold text-sm mb-1">
                        배달의민족
                      </div>
                      <div className="text-gray-300 text-sm">
                        새로운 리뷰가 등록되었습니다
                      </div>
                      <div className="flex gap-1 mt-2">
                        <Star className="w-4 h-4 fill-red-500 text-red-500" />
                        <Star className="w-4 h-4 fill-red-500 text-red-500" />
                        <Star className="w-4 h-4 text-gray-600" />
                        <Star className="w-4 h-4 text-gray-600" />
                        <Star className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs">지금</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 악플 내용 등장 */}
          <AnimatePresence>
            {showReview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur border-2 border-red-900/50 rounded-2xl p-6 relative">
                  <div className="absolute -top-3 left-6 bg-slate-950 px-3 py-1 rounded-full border border-red-900/50">
                    <span className="text-red-400 text-xs font-bold">실화임</span>
                  </div>

                  <div className="flex gap-1 mb-3">
                    <Star className="w-5 h-5 fill-red-500 text-red-500" />
                    <Star className="w-5 h-5 fill-red-500 text-red-500" />
                    <Star className="w-5 h-5 text-gray-600" />
                    <Star className="w-5 h-5 text-gray-600" />
                    <Star className="w-5 h-5 text-gray-600" />
                  </div>

                  <p className="text-gray-300 text-left text-lg leading-relaxed">
                    "양 너무 적어요. 이 가격에 이 정도...?<br/>
                    다신 안 시킬듯. 별로예요."
                  </p>

                  <div className="mt-4 text-gray-500 text-sm text-left">
                    방금 전 • 답변 없음
                  </div>
                </div>

                {/* 메인 헤드라인 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    새벽 3시에 이런 거 뜨면
                    <br />
                    <span className="text-red-400">진짜 잠 안옴 ㅋㅋㅋ</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    근데 이제 댓다라가 알아서 답변 달아주거나 숨겨줌
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 솔루션 등장 */}
          <AnimatePresence>
            {showSolution && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
              >
                {/* 자동 답변 생성 */}
                <div className="max-w-2xl mx-auto mb-8">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-yellow-900/30 via-green-900/30 to-blue-900/30 rounded-2xl p-6 border border-yellow-600/30"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">AI</span>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-yellow-400 font-semibold text-sm mb-2">
                          댓다라 자동 답변
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          "소중한 의견 감사합니다. 양에 대한 아쉬움을 남겨주셨네요.
                          더 만족스러운 경험을 드리지 못해 죄송합니다.
                          고객님의 피드백을 반영하여 개선하도록 노력하겠습니다.
                          다음에는 더 나은 모습으로 찾아뵙겠습니다!"
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold"
                      >
                        답변 등록하기
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* 핵심 포인트 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
                  <motion.div
                    whileHover={{ y: -5, rotate: -2 }}
                    className="bg-slate-900/50 border-2 border-yellow-600/30 rounded-xl p-4 backdrop-blur"
                  >
                    <div className="text-3xl mb-2">😴</div>
                    <div className="text-white font-bold mb-1">잠 깨지마</div>
                    <div className="text-gray-400 text-sm">24시간 자동 답변</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, rotate: 2 }}
                    className="bg-slate-900/50 border-2 border-green-600/30 rounded-xl p-4 backdrop-blur"
                  >
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-white font-bold mb-1">평점 ㅈㄴ 올라감</div>
                    <div className="text-gray-400 text-sm">평균 0.5점 상승</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, rotate: -2 }}
                    className="bg-slate-900/50 border-2 border-blue-600/30 rounded-xl p-4 backdrop-blur"
                  >
                    <div className="text-3xl mb-2">🛡️</div>
                    <div className="text-white font-bold mb-1">악플 자동 숨김</div>
                    <div className="text-gray-400 text-sm">별 1~3점 차단</div>
                  </motion.div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg font-bold group"
                    onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                  >
                    ㅇㅋ 써볼게
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-slate-700 hover:bg-slate-800"
                    onClick={() => {
                      // 페이지 맨 위로 스크롤
                      window.scrollTo({ top: 0, behavior: 'smooth' });

                      // 애니메이션 리셋
                      setShowNotification(false);
                      setShowReview(false);
                      setShowSolution(false);
                      setTimeout(() => setShowNotification(true), 800);
                      setTimeout(() => setShowReview(true), 2300);
                      setTimeout(() => setShowSolution(true), 4300);
                    }}
                  >
                    🔄 다시보기
                  </Button>
                </div>

                {/* 찐 후기 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-12 text-gray-500 text-sm"
                >
                  "ㄹㅇ 이거 쓰고 인생 바뀜 ㅋㅋㅋㅋ" - 강남 치킨집 사장님
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
