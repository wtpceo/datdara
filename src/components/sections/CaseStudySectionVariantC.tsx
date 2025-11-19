"use client";

import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle } from "lucide-react";

export default function CaseStudySectionVariantC() {
  const reviews = [
    {
      name: "홍대 파스타집",
      avatar: "🍝",
      message: "야 진짜 이거 쓰고 인생 바뀜 ㅋㅋㅋㅋ\n별점 4.1에서 4.6 됐음;;;",
      likes: 142,
      replies: 23,
      time: "3시간 전",
      color: "yellow"
    },
    {
      name: "강남 치킨집",
      avatar: "🍗",
      message: "악플 때문에 진짜 스트레스 ㅈㄴ 받았는데\n이제 그냥 자동으로 숨겨지니까 개꿀",
      likes: 89,
      replies: 15,
      time: "5시간 전",
      color: "green"
    },
    {
      name: "서초 분식집",
      avatar: "🍜",
      message: "월 7만원에 2시간 아끼는건데\n시급으로 치면 ㅇㅈ 개이득 ㄹㅇ",
      likes: 201,
      replies: 34,
      time: "1일 전",
      color: "blue"
    },
    {
      name: "판교 일식집",
      avatar: "🍱",
      message: "처음엔 반신반의했는데\n재주문율 진짜 올라서 놀랐음\n배민에서 노출도 더 잘됨",
      likes: 167,
      replies: 28,
      time: "2일 전",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'yellow':
        return 'border-yellow-600/30 bg-yellow-900/10';
      case 'green':
        return 'border-green-600/30 bg-green-900/10';
      case 'blue':
        return 'border-blue-600/30 bg-blue-900/10';
      case 'purple':
        return 'border-purple-600/30 bg-purple-900/10';
      default:
        return 'border-slate-600/30 bg-slate-900/10';
    }
  };

  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            사장님들 <span className="text-yellow-400">찐후기</span>
          </h2>
          <p className="text-xl text-gray-400">
            배민 사장님 커뮤니티에서 가져온 리얼 후기
          </p>
        </motion.div>

        {/* 카톡 스타일 후기들 */}
        <div className="max-w-4xl mx-auto space-y-4">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className={`border-2 rounded-2xl p-5 backdrop-blur ${getColorClasses(review.color)}`}>
                <div className="flex items-start gap-4">
                  {/* 아바타 */}
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {review.avatar}
                  </div>

                  {/* 내용 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-bold">{review.name}</span>
                      <span className="text-gray-500 text-sm">{review.time}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-3">
                      {review.message}
                    </p>

                    {/* 좋아요/댓글 */}
                    <div className="flex items-center gap-4 text-sm">
                      <button className="flex items-center gap-1 text-gray-400 hover:text-yellow-400 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{review.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{review.replies}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 통계 카드 - 비대칭 배치 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ rotate: -2, y: -5 }}
            className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 border-2 border-yellow-600/30 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold text-yellow-400 mb-2">6.5배</div>
            <div className="text-gray-300 font-medium mb-1">재주문율 상승</div>
            <div className="text-gray-500 text-sm">배민 공식 통계 기반</div>
          </motion.div>

          <motion.div
            whileHover={{ rotate: 2, y: -5 }}
            className="bg-gradient-to-br from-green-900/20 to-green-900/5 border-2 border-green-600/30 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold text-green-400 mb-2">+0.5점</div>
            <div className="text-gray-300 font-medium mb-1">평균 평점 상승</div>
            <div className="text-gray-500 text-sm">악플 자동 숨김 효과</div>
          </motion.div>

          <motion.div
            whileHover={{ rotate: -2, y: -5 }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border-2 border-blue-600/30 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-bold text-blue-400 mb-2">2시간</div>
            <div className="text-gray-300 font-medium mb-1">매일 시간 절약</div>
            <div className="text-gray-500 text-sm">자동화로 편하게</div>
          </motion.div>
        </motion.div>

        {/* 추가 코멘트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-slate-800/50 border border-slate-700 rounded-full px-4 md:px-6 py-3 max-w-full mx-2">
            <div className="text-sm md:text-base text-gray-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
              <span>"이 가격에 이 효과면 ㄹㅇ 개꿀"</span>
              <span className="text-yellow-400 sm:ml-2">- 500+ 사장님들이 선택</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
