export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">댓다라</h3>
            <p className="text-gray-400 mb-4">
              배달 플랫폼 리뷰 자동 답변으로<br />
              재주문율 6.5배 상승, 별점 방어까지
            </p>
            <div className="text-sm text-gray-500">
              <p>주식회사 위즈더플래닝</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>대표: 김대표</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  주요 기능
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  가격
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객 지원</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:support@daetdara.com"
                  className="hover:text-white transition-colors"
                >
                  support@daetdara.com
                </a>
              </li>
              <li>
                <a
                  href="tel:02-1234-5678"
                  className="hover:text-white transition-colors"
                >
                  02-1234-5678
                </a>
              </li>
              <li>
                <a
                  href="https://open.kakao.com/daetdara"
                  className="hover:text-white transition-colors"
                >
                  카톡 채널
                </a>
              </li>
              <li className="text-sm">
                운영시간: 평일 10:00 - 19:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 댓다라. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/terms" className="hover:text-white transition-colors">
                이용약관
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="/refund" className="hover:text-white transition-colors">
                환불정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}