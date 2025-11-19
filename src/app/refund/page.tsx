"use client";

import Link from "next/link";
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Button>
        </Link>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">환불 정책</h1>

          <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                댓다라 서비스의 환불 정책은 다음과 같습니다. 서비스 이용 전 반드시 확인해주시기 바랍니다.
              </p>
            </section>

            <section className="bg-blue-900/20 border-2 border-blue-600/30 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">3일 무료 체험</h2>
                  <p className="text-gray-300 leading-relaxed">
                    모든 신규 고객에게 3일 무료 체험 기간을 제공합니다. 무료 체험 기간 동안에는 결제가 발생하지 않으며, 언제든지 서비스를 해지할 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. 월 구독 서비스 환불 원칙</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <div className="bg-yellow-900/20 border-2 border-yellow-600/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-400 mb-2">당월 결제 완료 건 환불 불가</p>
                      <p className="text-gray-300">
                        월 구독료가 결제된 경우, 해당 월의 <span className="font-bold text-white">말일(마지막 날)까지 서비스를 이용</span>할 수 있으며, 이미 결제된 금액은 환불되지 않습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-white">예시:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                    <li>
                      11월 5일에 프로 플랜(49,000원) 결제 완료<br/>
                      → 11월 30일까지 서비스 이용 가능<br/>
                      → 결제 금액 환불 불가
                    </li>
                    <li>
                      11월 20일에 해지 요청<br/>
                      → 11월 30일까지 서비스 계속 이용 가능<br/>
                      → 12월 1일부터 자동 갱신 중단 (추가 결제 없음)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. 서비스 해지 방법</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>서비스 해지는 다음 방법으로 요청할 수 있습니다:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-semibold text-white">카카오톡 채널:</span> 위즈더플래닝리뷰
                  </li>
                  <li>
                    <span className="font-semibold text-white">이메일:</span> wiz@wiztheplanning.com
                  </li>
                  <li>
                    <span className="font-semibold text-white">전화:</span> 1670-0704 (평일 10:00-18:00)
                  </li>
                </ul>
                <p className="mt-4 bg-slate-800 rounded-lg p-4">
                  <span className="font-semibold text-white">처리 시간:</span> 해지 요청 후 영업일 기준 1일 이내 처리됩니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. 자동 갱신 중단</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>서비스 해지 요청 시:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>현재 결제된 기간(당월 말일)까지 서비스를 계속 이용할 수 있습니다.</li>
                  <li>다음 달 1일부터 자동 갱신이 중단되어 추가 결제가 발생하지 않습니다.</li>
                  <li>해지 후에도 언제든지 재가입이 가능합니다.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. 환불 가능한 경우</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>다음의 경우에는 환불이 가능합니다:</p>
                <div className="space-y-4 mt-4">
                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">① 회사의 귀책사유로 서비스 제공 불가</p>
                    <p>회사의 시스템 장애, 오류 등으로 인해 서비스를 정상적으로 제공하지 못한 경우, 해당 기간에 대해 일할 계산하여 환불합니다.</p>
                  </div>

                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">② 중복 결제</p>
                    <p>시스템 오류 등으로 인한 중복 결제 발생 시 즉시 전액 환불합니다.</p>
                  </div>

                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">③ 서비스 이용 전 해지</p>
                    <p>결제 후 서비스를 전혀 이용하지 않고 즉시 해지를 요청한 경우, 전액 환불이 가능합니다. (결제일로부터 7일 이내)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. 환불 처리 절차</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>환불 승인 시 다음과 같이 처리됩니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>카드 결제: 승인 후 3-5 영업일 내 카드사를 통해 환불</li>
                  <li>계좌 이체: 승인 후 3-5 영업일 내 지정 계좌로 환불</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  * 카드사 사정에 따라 환불 처리 기간이 다소 지연될 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. 환불 불가 사유</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>다음의 경우에는 환불이 불가합니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>당월 결제가 완료되고 서비스를 이용한 경우</li>
                  <li>이용자의 단순 변심 또는 서비스 만족도 문제</li>
                  <li>배달 플랫폼의 정책 변경으로 인한 서비스 제한</li>
                  <li>이용자의 계정 정보 오류로 인한 서비스 이용 제한</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. 문의 및 분쟁 해결</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>환불 관련 문의사항이 있으시면 고객센터로 연락 주시기 바랍니다:</p>
                <div className="bg-slate-800 rounded-lg p-4 mt-4 space-y-1">
                  <p><span className="font-semibold text-white">카카오톡:</span> 위즈더플래닝리뷰</p>
                  <p><span className="font-semibold text-white">이메일:</span> wiz@wiztheplanning.com</p>
                  <p><span className="font-semibold text-white">전화:</span> 1670-0704</p>
                  <p className="text-sm text-gray-400">운영시간: 평일 10:00 - 18:00</p>
                </div>
              </div>
            </section>

            <section className="bg-slate-800 border border-slate-700 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">환불 정책 요약</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>3일 무료 체험 제공 (언제든 해지 가능)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 flex-shrink-0">!</span>
                  <span>당월 결제 완료 건은 환불 불가 (말일까지 이용 가능)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>해지 시 다음 달 자동 갱신 중단</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>회사 귀책사유 시 환불 가능</span>
                </div>
              </div>
            </section>

            <section className="border-t border-slate-700 pt-8 mt-8">
              <p className="text-gray-400 text-sm">
                본 환불 정책은 2025년 1월 1일부터 시행됩니다.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                (주)위즈더플래닝
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
