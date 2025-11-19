import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://daetdara.com'),
  title: "댓다라 | 재주문율 6.5배 상승, 리뷰 답변 자동화",
  description: "배달 플랫폼 리뷰 자동 답변으로 재주문율 6.5배 상승, 별점 방어까지. 월/수/금 자연스러운 답변, 별 3점 이하 자동 숨김.",
  keywords: "리뷰 답변 자동화, 배민 리뷰 관리, 쿠팡이츠 리뷰, 재주문율 상승, 별점 관리",
  openGraph: {
    title: "댓다라 | 재주문율 6.5배 상승",
    description: "배달 플랫폼 리뷰 자동 답변으로 재주문율 6.5배 상승",
    url: "https://daetdara.com",
    siteName: "댓다라",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "댓다라 - 재주문율 6.5배 상승",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "댓다라 | 재주문율 6.5배 상승",
    description: "배달 플랫폼 리뷰 자동 답변으로 재주문율 6.5배 상승",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
