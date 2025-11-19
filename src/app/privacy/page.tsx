"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">개인정보처리방침</h1>

          <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                주식회사 위즈더플래닝(이하 "회사")은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하고 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. 개인정보의 수집 및 이용 목적</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>회사는 다음의 목적을 위해 개인정보를 수집 및 이용합니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>서비스 제공 및 운영</li>
                  <li>회원 관리 및 본인 확인</li>
                  <li>고객 문의 및 불만 처리</li>
                  <li>서비스 개선 및 신규 서비스 개발</li>
                  <li>요금 결제 및 정산</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. 수집하는 개인정보 항목</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold mb-2">▶ 필수 수집 항목</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>이름, 이메일 주소, 휴대전화번호</li>
                    <li>사업자 정보 (상호, 사업자등록번호)</li>
                    <li>결제 정보 (카드 정보, 은행 계좌 정보)</li>
                    <li className="font-semibold text-yellow-400">배달 플랫폼 계정 정보 (배달의민족, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스의 계정 ID 및 비밀번호)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">▶ 자동 수집 항목</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>서비스 이용 기록, 접속 로그, IP 주소</li>
                    <li>쿠키, 기기 정보</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-yellow-900/20 border-2 border-yellow-600/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. 배달 플랫폼 계정 정보 수집 및 이용에 관한 특별 동의</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p className="font-semibold">회사는 서비스 제공을 위해 이용자의 배달 플랫폼 계정 정보를 수집 및 이용합니다:</p>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">▶ 수집 항목</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>배달의민족, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스 계정 ID</li>
                    <li>배달의민족, 쿠팡이츠, 요기요, 땡겨요, 네이버플레이스 계정 비밀번호</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">▶ 수집 및 이용 목적</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>이용자 매장의 리뷰 조회 및 수집</li>
                    <li>리뷰에 대한 자동 답변 생성 및 등록</li>
                    <li>저평점 리뷰 자동 숨김 처리</li>
                    <li>리뷰 분석 및 대시보드 제공</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">▶ 제3자 제공</p>
                  <p>수집된 플랫폼 계정 정보는 해당 배달 플랫폼 API 연동 및 서비스 제공 목적으로만 사용되며, 별도의 제3자에게 제공되지 않습니다.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">▶ 이용자의 명시적 동의</p>
                  <p>이용자는 서비스 이용 약관 및 개인정보처리방침에 동의함으로써, 회사가 위 목적을 위해 플랫폼 계정 정보를 수집·이용하는 것에 명시적으로 동의한 것으로 간주됩니다.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">▶ 동의 철회 및 삭제</p>
                  <p>이용자는 언제든지 서비스 해지를 통해 플랫폼 계정 정보 제공 동의를 철회할 수 있으며, 해지 즉시 해당 정보는 삭제 처리되고 30일 후 완전히 파기됩니다.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold text-white mb-2">▶ 보안 조치</p>
                  <p>회사는 플랫폼 계정 정보를 암호화하여 안전하게 보관하며, 승인된 담당자만 접근할 수 있도록 제한합니다.</p>
                </div>

                <div className="mt-4 bg-red-900/20 border border-red-600/30 rounded p-4">
                  <p className="font-semibold text-red-400 mb-2">⚠️ 중요 고지사항</p>
                  <p className="text-sm">이용자가 자발적으로 제공한 플랫폼 계정 정보를 통해 수행되는 모든 서비스 이용 행위는 이용자 본인의 명시적 동의 하에 이루어진 것으로 간주됩니다. 배달 플랫폼의 정책에 따라 제3자의 계정 정보 이용이 제한될 수 있으며, 이로 인해 발생하는 플랫폼과의 분쟁에 대해서는 이용자가 책임을 부담합니다. 회사는 이용자의 동의를 받아 적법하게 서비스를 제공하였음을 증명할 수 있습니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. 개인정보의 보유 및 이용 기간</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>1. 회사는 이용자가 서비스를 이용하는 기간 동안 개인정보를 보유 및 이용합니다.</p>
                <p>2. 서비스 해지 시, 해당 정보는 즉시 삭제되며 30일 후 완전히 파기됩니다.</p>
                <p>3. 단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                  <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. 개인정보의 파기 절차 및 방법</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>1. 파기 절차: 보유 기간이 경과한 개인정보는 지체 없이 파기합니다.</p>
                <p>2. 파기 방법:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>전자적 파일: 복구 불가능한 방법으로 영구 삭제</li>
                  <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. 이용자의 권리와 행사 방법</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>개인정보 열람 요구</li>
                  <li>개인정보 정정 요구</li>
                  <li>개인정보 삭제 요구</li>
                  <li>개인정보 처리 정지 요구</li>
                </ul>
                <p className="mt-2">권리 행사는 고객센터(1670-0704, wiz@wiztheplanning.com)를 통해 가능합니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. 개인정보 보호책임자</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:</p>
                <div className="bg-slate-800 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-white">개인정보 보호책임자</p>
                  <ul className="mt-2 space-y-1">
                    <li>성명: 김민우</li>
                    <li>이메일: qpqpqp@wiztheplanning.com</li>
                    <li>전화: 1670-0704</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. 개인정보의 안전성 확보 조치</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>개인정보 암호화: 비밀번호 등 중요 정보는 암호화하여 저장</li>
                  <li>해킹 등에 대비한 기술적 대책</li>
                  <li>개인정보 취급 직원의 최소화 및 교육</li>
                  <li>접근 권한 관리</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. 쿠키의 운영 및 관리</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>1. 회사는 서비스 제공을 위해 쿠키를 사용할 수 있습니다.</p>
                <p>2. 이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹 브라우저 설정을 통해 쿠키를 거부할 수 있습니다.</p>
                <p>3. 단, 쿠키 거부 시 일부 서비스 이용에 제한이 있을 수 있습니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. 개인정보처리방침의 변경</h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>본 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있으며, 변경 시 최소 7일 전에 서비스 내 공지사항을 통해 고지합니다.</p>
              </div>
            </section>

            <section className="border-t border-slate-700 pt-8 mt-8">
              <p className="text-gray-400 text-sm">
                본 개인정보처리방침은 2025년 1월 1일부터 시행됩니다.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                (주)위즈더플래닝<br/>
                개인정보 보호책임자: 김민우 (qpqpqp@wiztheplanning.com)
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
