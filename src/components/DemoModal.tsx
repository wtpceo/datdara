"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Loader2, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "치킨이 바삭하고 정말 맛있어요! 다음에도 또 시킬게요 👍",
      author: "김*은",
      sentiment: "긍정",
      keywords: ["바삭", "맛있어요"],
      response: "와, 정말 감사합니다! 🙏✨\n\n저희 치킨의 바삭한 식감을 좋게 평가해 주셔서 너무 기쁩니다! 매장에서 주문이 들어올 때마다 신선한 기름에 정성스럽게 튀겨내고 있는데, 그 노력이 전달된 것 같아 뿌듯하네요 😊\n\n다음에 또 주문해 주신다니 정말 감사드려요! 항상 같은 맛, 같은 품질로 보답하겠습니다. 오늘도 행복한 하루 보내세요! 🍗💛"
    },
    {
      id: 2,
      rating: 2,
      text: "양이 좀 적은 것 같아요. 이 가격에 이 정도면...",
      author: "박*준",
      sentiment: "부정",
      keywords: ["양", "가격"],
      response: "소중한 의견 남겨주셔서 정말 감사합니다 🙏\n\n양에 대해 아쉬움을 느끼셨다니 정말 죄송합니다. 고객님께서 기대하셨던 만큼 만족을 드리지 못한 것 같아 마음이 무겁네요 😢\n\n저희 매장에서는 신선한 재료로 적정량을 제공하려 노력하고 있지만, 고객님의 피드백을 진지하게 받아들이고 개선 방안을 고민해보겠습니다.\n\n다시 한 번 기회를 주신다면 더 나은 모습으로 찾아뵙겠습니다. 건강 챙기시고 좋은 하루 되세요! 💪",
      autoHide: true
    },
    {
      id: 3,
      rating: 4,
      text: "배달도 빠르고 맛도 좋네요. 다만 소스가 좀 더 있었으면 좋겠어요",
      author: "이*희",
      sentiment: "긍정",
      keywords: ["배달 빠름", "맛 좋음", "소스"],
      response: "배달 서비스와 맛 모두 만족하셨다니 정말 기쁩니다! 🚀😊\n\n빠른 배달을 위해 라이더분들과 함께 항상 최선을 다하고 있는데, 좋게 봐주셔서 감사합니다!\n\n소스 관련해서는 정말 좋은 의견 주셨어요 👍 다음번 주문하실 때 요청사항에 \"소스 추가\"라고 남겨주시면, 넉넉하게 더 챙겨드리겠습니다! 추가 비용 없이요 😉\n\n앞으로도 더 맛있고 만족스러운 식사 경험을 드릴 수 있도록 노력하겠습니다. 오늘도 맛있는 하루 되세요! 🍗💛"
    }
  ];

  const currentReview = reviews[currentStep];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setIsAnalyzing(false);
      setGeneratedResponse("");
      setIsTyping(false);
    }
  }, [isOpen]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);

    // 2초 후 분석 완료
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsTyping(true);

      // 타이핑 효과
      const response = currentReview.response;
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= response.length) {
          setGeneratedResponse(response.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 30);
    }, 2000);
  };

  const handleNext = () => {
    if (currentStep < reviews.length - 1) {
      setCurrentStep(currentStep + 1);
      setGeneratedResponse("");
      setIsAnalyzing(false);
      setIsTyping(false);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setGeneratedResponse("");
    setIsAnalyzing(false);
    setIsTyping(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border-2 border-slate-700 z-50 p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                AI 답변 생성 데모
              </h2>
              <p className="text-gray-400 mb-3">
                실제 리뷰를 분석하고 맞춤 답변을 생성하는 과정을 확인해보세요
              </p>
              <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p className="text-blue-300 text-sm">
                  <span className="font-semibold">시연을 위해 버튼을 눌러주세요.</span><br/>
                  실제 서비스에서는 리뷰가 등록되면 자동으로 분석부터 답변 등록까지 모두 진행됩니다.
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    index <= currentStep ? "bg-yellow-400" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            {/* Review Card */}
            <div className="bg-slate-800 rounded-xl p-6 mb-6 border-2 border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= currentReview.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{currentReview.author}</p>
                </div>
                {currentReview.autoHide && (
                  <div className="flex items-center gap-2 bg-red-900/20 border border-red-600/30 rounded-lg px-3 py-1">
                    <Eye className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm font-medium">자동 숨김</span>
                  </div>
                )}
              </div>

              <p className="text-gray-200 text-lg mb-4">{currentReview.text}</p>

              {/* Analysis */}
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-slate-700 pt-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Loader2 className="w-5 h-5 text-yellow-400 animate-spin" />
                    <span className="text-yellow-400 font-medium">AI 분석 중...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">감정:</span>
                      <span className={`text-sm font-medium ${
                        currentReview.sentiment === "긍정" ? "text-green-400" : "text-red-400"
                      }`}>
                        {currentReview.sentiment}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">키워드:</span>
                      <div className="flex gap-2">
                        {currentReview.keywords.map((keyword, idx) => (
                          <span key={idx} className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Generated Response */}
              {generatedResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-slate-700 pt-4 mt-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">AI</span>
                    </div>
                    <span className="text-yellow-400 font-medium">생성된 답변</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed bg-slate-900/50 rounded-lg p-4 whitespace-pre-line">
                    {generatedResponse}
                    {isTyping && <span className="inline-block w-1 h-5 bg-yellow-400 ml-1 animate-pulse" />}
                  </p>
                  {!isTyping && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 mt-3 text-green-400"
                    >
                      <Check className="w-5 h-5" />
                      <span className="font-medium">답변 등록 완료!</span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {!generatedResponse && !isAnalyzing && (
                <Button
                  onClick={handleAnalyze}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                  size="lg"
                >
                  AI 답변 생성하기
                </Button>
              )}

              {generatedResponse && !isTyping && currentStep < reviews.length - 1 && (
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold"
                  size="lg"
                >
                  다음 리뷰 보기
                </Button>
              )}

              {generatedResponse && !isTyping && currentStep === reviews.length - 1 && (
                <>
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="flex-1"
                    size="lg"
                  >
                    처음부터 다시보기
                  </Button>
                  <Button
                    onClick={() => window.open('http://pf.kakao.com/_xmhWxin/chat', '_blank')}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold"
                    size="lg"
                  >
                    3일 무료 시작하기
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
