"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              배달 플랫폼 리뷰 관리 자동화 서비스
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-white text-sm transition-colors">
                  환불정책
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>카카오톡: 위즈더플래닝리뷰</li>
              <li>전화: 1670-0704</li>
              <li>이메일: wiz@wiztheplanning.com</li>
              <li className="text-gray-500">평일 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-slate-800 pt-8">
          <div className="text-gray-500 text-xs leading-relaxed space-y-1">
            <p>(주)위즈더플래닝 | 대표: 정현우</p>
            <p>사업자등록번호: 668-81-00391</p>
            <p>통신판매업신고번호: [내일 업데이트 예정]</p>
            <p>주소: 서울시 금천구 디지털로 178 가산퍼블릭 A동 2518호, 2519호</p>
            <p>개인정보 보호책임자: 김민우 (qpqpqp@wiztheplanning.com)</p>
            <p>호스팅 서비스: Vercel Inc.</p>
          </div>

          <p className="text-gray-600 text-xs mt-4">
            © 2025 위즈더플래닝. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
