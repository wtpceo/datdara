"use client";

import { Star, TrendingUp, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CaseStudySection() {
  // Sample data for charts
  const reorderData = [
    { month: "1월", before: 15, after: 35 },
    { month: "2월", before: 18, after: 45 },
    { month: "3월", before: 20, after: 65 },
    { month: "4월", before: 22, after: 85 },
    { month: "5월", before: 25, after: 98 },
    { month: "6월", before: 23, after: 97.5 },
  ];

  const ratingData = [
    { month: "1월", rating: 4.2 },
    { month: "2월", rating: 4.3 },
    { month: "3월", rating: 4.4 },
    { month: "4월", rating: 4.5 },
    { month: "5월", rating: 4.6 },
    { month: "6월", rating: 4.7 },
  ];

  const cases = [
    {
      title: "치킨 프랜차이즈 A점",
      category: "치킨",
      before: {
        rating: "4.2",
        reorder: "15%",
        responseRate: "30%",
        timeSpent: "3시간/일"
      },
      after: {
        rating: "4.7",
        reorder: "97.5%",
        responseRate: "100%",
        timeSpent: "10분/일"
      }
    },
    {
      title: "분식 매장 B점",
      category: "분식",
      before: {
        rating: "3.8",
        reorder: "10%",
        responseRate: "20%",
        timeSpent: "2시간/일"
      },
      after: {
        rating: "4.5",
        reorder: "65%",
        responseRate: "100%",
        timeSpent: "5분/일"
      }
    }
  ];

  return (
    <section id="case-study" className="py-16 md:py-20 bg-slate-800/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            실제 사용 <span className="text-yellow-400">Before & After</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            댓다라를 사용한 사장님들의 놀라운 변화
          </p>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">재주문율 변화</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={reorderData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Area
                  type="monotone"
                  dataKey="before"
                  stroke="#dc2626"
                  fill="#dc2626"
                  fillOpacity={0.3}
                  name="Before"
                />
                <Area
                  type="monotone"
                  dataKey="after"
                  stroke="#fbbf24"
                  fill="#fbbf24"
                  fillOpacity={0.5}
                  name="After"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full" />
                <span className="text-gray-400 text-sm">Before</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="text-gray-400 text-sm">After</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">평균 평점 상승</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis domain={[4, 5]} stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Line
                  type="monotone"
                  dataKey="rating"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", r: 6 }}
                  name="평점"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-green-400">+0.5</span>
              <span className="text-gray-400 ml-2">평균 상승</span>
            </div>
          </motion.div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{caseItem.title}</h3>
                  <span className="text-sm text-gray-400">{caseItem.category}</span>
                </div>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                  성공 사례
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                  <div className="text-sm text-red-400 mb-2">BEFORE</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">평점</span>
                      <span className="text-white font-medium">{caseItem.before.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">재주문율</span>
                      <span className="text-white font-medium">{caseItem.before.reorder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">답변율</span>
                      <span className="text-white font-medium">{caseItem.before.responseRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">소요시간</span>
                      <span className="text-white font-medium">{caseItem.before.timeSpent}</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                  <div className="text-sm text-green-400 mb-2">AFTER</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">평점</span>
                      <span className="text-white font-medium">{caseItem.after.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">재주문율</span>
                      <span className="text-yellow-400 font-bold">{caseItem.after.reorder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">답변율</span>
                      <span className="text-white font-medium">{caseItem.after.responseRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">소요시간</span>
                      <span className="text-white font-medium">{caseItem.after.timeSpent}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-900/20 to-red-900/20 border-2 border-yellow-600/30 rounded-xl p-8 text-center"
        >
          <p className="text-xl text-white mb-4">
            "댓다라 쓰고 나서 리뷰 관리 스트레스가 사라졌어요.
            <br />
            재주문율이 정말 6배 이상 올라서 놀랐습니다!"
          </p>
          <div className="text-gray-400">
            - 강남역 치킨집 김사장님
          </div>
        </motion.div>
      </div>
    </section>
  );
}