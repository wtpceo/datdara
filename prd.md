# 댓다라 (Daetdara) - PRD (Product Requirements Document)

**Version:** 1.0  
**Date:** 2024.11.19  
**Owner:** WizThePlanning  
**Status:** Ready for Development

---

## 📋 목차
1. [제품 개요](#제품-개요)
2. [문제 정의](#문제-정의)
3. [핵심 가치 제안](#핵심-가치-제안)
4. [타겟 고객](#타겟-고객)
5. [주요 기능](#주요-기능)
6. [기술 스택](#기술-스택)
7. [사용자 플로우](#사용자-플로우)
8. [UI/UX 가이드라인](#uiux-가이드라인)
9. [우선순위 및 MVP](#우선순위-및-mvp)
10. [성공 지표](#성공-지표)
11. [로드맵](#로드맵)

---

## 제품 개요

### 제품명
**댓다라** (Daetdara)

### 한 줄 설명
"배달 플랫폼 리뷰 자동 답변으로 재주문율 6.5배 상승, 별점 방어까지"

### 제품 본질
리뷰 답변 자동화 + 징검다리 답변 전략 + 별점 숨기기 = **재주문율 상승 & 평점 보호**

### 핵심 차별점
1. **본질**: 리뷰 답변 관리로 재주문율 6.5배 상승 (배민 공식 통계)
2. **킬러 피처**: 별 3점 이하 자동 숨김 (배민·쿠팡)
3. **자연스러움**: 월/수/금 징검다리 답변 (봇 티 안남)
4. **통합 관리**: 5개 플랫폼 한 번에

---

## 문제 정의

### 타겟 고객의 고민

#### 1차 고민: 시간 부족
- 하루 10~30개 리뷰에 일일이 답변하기 힘듦
- 새벽/심야 리뷰는 놓치기 일쑤
- 5개 플랫폼 돌아다니며 관리하는 시간만 2시간

#### 2차 고민: 재주문율 하락
- **리뷰 답변 없으면 재주문율 급감** (배민 통계 근거)
- "감사합니다 ㅎㅎ" 반복적인 답변으로 진정성 의심
- 악플에 제대로 대응 못해 고객 이탈

#### 3차 고민: 평점 스트레스
- 별 1~3점 하나에 평점 급락
- 악플 알림 올 때마다 심장 쿵
- 평점 떨어지면 배민 노출 순위 하락 → 매출 직격탄

### 현재 시장 솔루션의 문제점
- **대행 서비스**: 비싸고 (월 30만원~), 응답 느림
- **기존 자동화 툴**: 매일 답변 = 봇 티 확실, 별점 숨기기 없음
- **직접 관리**: 시간 소모, 일관성 부족, 스트레스

---

## 핵심 가치 제안

### 메인 가치 제안
> **"리뷰 답변 관리만 잘해도 재주문율 6.5배 상승"** (배민 공식 통계)  
> 댓다라가 자동으로 관리해드립니다

### 세부 가치 제안

#### 1. 재주문율 상승 (본질)
```
✓ 모든 리뷰에 빠짐없이 답변
✓ 매장 톤에 맞춘 맞춤 답변
✓ 배민 통계: 답변 관리 잘하면 재주문율 6.5배 ↑
```

#### 2. 평점 보호 (킬러 피처)
```
✓ 별 3점 이하 자동 숨김 (배민·쿠팡)
✓ 평균 0.3~0.5점 상승
✓ 악플 스트레스 제로
```

#### 3. 시간 절약 (효율)
```
✓ 하루 평균 2시간 절약
✓ 5개 플랫폼 통합 관리
✓ 월/수/금 자동 답변 (자연스러움)
```

#### 4. 매출 증대 (결과)
```
재주문율 ↑ + 평점 ↑ = 배민 노출 ↑ = 매출 ↑
```

---

## 타겟 고객

### 1차 타겟 (MVP)
**배민·쿠팡 중심 음식점 (하루 리뷰 10개 이상)**

- **업종**: 치킨, 분식, 족발보쌈, 중식, 피자, 버거 등
- **규모**: 1인 운영 ~ 직원 5명 이하
- **특징**: 
  - 배민·쿠팡이츠가 주 매출원
  - 하루 리뷰 10~30개
  - 리뷰 관리에 하루 1~2시간 소비
  - 재주문율 중요 (단골 고객 비율 높음)

### 2차 타겟
**네이버플레이스 중심 매장**

- **업종**: 카페, 베이커리, 음식점
- **특징**: 네이버플레이스 평점 중요, 검색 노출 의존도 높음

### 3차 타겟
**프랜차이즈 다점포 운영자**

- 3개 이상 점포 운영
- 통합 리뷰 관리 필요

---

## 주요 기능

### Phase 1 - MVP (필수 기능)

#### 1. 리뷰 답변 자동화 ⭐⭐⭐⭐⭐
**[본질 기능]**

**기능:**
- 배민, 쿠팡이츠 신규 리뷰 자동 감지
- AI 기반 맞춤형 답변 생성
- 월/수/금 또는 매일 선택 가능한 답변 주기
- 매장 톤앤매너 학습 및 적용

**기술 구현:**
```
1. 크롤링: Playwright로 플랫폼 리뷰 수집
2. AI 답변: Claude API로 맞춤 답변 생성
3. 자동 등록: Playwright로 플랫폼에 답변 등록
4. 스케줄링: 월/수/금 또는 매일 자동 실행
```

**데이터 포인트:**
- 리뷰 내용
- 별점
- 주문 메뉴
- 고객 닉네임
- 작성 일시

**답변 생성 로직:**
```python
# 매장별 톤앤매너 + 리뷰 내용 분석
prompt = f"""
매장 정보: {store_info}
리뷰 내용: {review_text}
별점: {rating}

다음 조건으로 답변 생성:
1. {store_tone} 톤으로 작성
2. 별점에 따라 적절한 온도감
3. 50자 이내 간결하게
4. 이모지 {emoji_setting}
"""
```

#### 2. 별점 숨기기 (배민·쿠팡) ⭐⭐⭐⭐⭐
**[킬러 피처]**

**기능:**
- 별 3점 이하 리뷰 자동 숨김 처리
- 숨긴 리뷰도 답변은 자동으로 등록
- 숨김 기준 커스터마이징 가능 (1~3점)

**기술 구현:**
```
1. 리뷰 감지: 새 리뷰 등록 시 별점 체크
2. 조건 확인: 별점 <= 3점?
3. 자동 숨김: Playwright로 숨김 버튼 클릭
4. 답변 등록: 숨겨도 답변은 등록
```

**제한사항:**
- 배민, 쿠팡이츠만 가능 (플랫폼 정책)
- 요기요, 땡겨요, 네이버는 숨김 불가

#### 3. 플랫폼 연동 ⭐⭐⭐⭐⭐
**[필수]**

**지원 플랫폼:**
1. 배달의민족 (우선 1순위)
2. 쿠팡이츠 (우선 2순위)
3. 요기요
4. 땡겨요
5. 네이버플레이스

**연동 방식:**
- ID/PW 방식 (Playwright 자동 로그인)
- 2단계 인증 지원 필요

#### 4. 대시보드 ⭐⭐⭐⭐
**[핵심 UI]**

**주요 화면:**
```
1. 홈 대시보드
   - 오늘의 리뷰 통계
   - 답변 완료율
   - 평점 변화 그래프
   - 숨김 처리 개수

2. 리뷰 관리
   - 전체 리뷰 목록
   - 플랫폼별 필터
   - 답변 상태 (대기/완료/숨김)
   - 수동 답변 가능

3. 설정
   - 플랫폼 연동
   - 답변 톤앤매너 설정
   - 답변 주기 선택 (월수금/매일)
   - 별점 숨김 기준
```

#### 5. 답변 톤앤매너 설정 ⭐⭐⭐⭐
**[차별화]**

**설정 옵션:**
```
1. 기본 스타일
   - 친근한 (ㅎㅎ, 이모지 많음)
   - 정중한 (격식, 이모지 최소)
   - 활기찬 (느낌표, 밝은 톤)

2. 맞춤 설정
   - 매장 소개 텍스트 입력
   - 자주 쓰는 표현 입력
   - 금지어 설정

3. AI 학습
   - 기존 답변 10개 입력 → AI 학습
```

### Phase 2 - 추가 기능 (후순위)

#### 6. 리뷰 분석 및 인사이트 ⭐⭐⭐
- 긍정/부정 리뷰 비율
- 자주 언급되는 메뉴
- 평점 추이 분석
- 경쟁 매장 비교

#### 7. 알림 시스템 ⭐⭐⭐
- 악플 알림 (별 1~2점)
- 일일 리포트 (카톡/이메일)
- 평점 변화 알림

#### 8. 다점포 관리 ⭐⭐
- 여러 매장 통합 관리
- 매장별 별도 설정

---

## 기술 스택

### Frontend
```
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Components: shadcn/ui
State: Zustand
Charts: Recharts
Icons: Lucide React
```

### Backend & Automation
```
Runtime: Node.js
Automation: Playwright (리뷰 크롤링 & 답변 등록)
AI: Anthropic Claude API (답변 생성)
Database: Supabase (PostgreSQL)
Auth: Supabase Auth
Cron: Vercel Cron Jobs (스케줄링)
```

### Infrastructure
```
Hosting: Vercel
Database: Supabase
Storage: Supabase Storage (스크린샷 등)
Email: Resend
Monitoring: Sentry
Analytics: Google Analytics 4
```

### Development Tools
```
Version Control: Git + GitHub
Package Manager: pnpm
Code Editor: Claude Code / Cursor
Deployment: Vercel (main branch auto-deploy)
```

---

## 사용자 플로우

### 1. 온보딩 플로우
```
1. 회원가입 (이메일/소셜)
   ↓
2. 플랫폼 연동
   - 배민 ID/PW 입력
   - 쿠팡이츠 ID/PW 입력
   - (선택) 요기요, 땡겨요, 네이버
   ↓
3. 답변 스타일 설정
   - 친근한/정중한/활기찬 선택
   - 또는 기존 답변 10개 입력
   ↓
4. 답변 주기 선택
   - 월/수/금 (추천)
   - 매일
   ↓
5. 별점 숨김 설정
   - 별 3점 이하 숨김 ON/OFF
   - 숨김 기준 선택 (1~3점)
   ↓
6. 완료! 대시보드로 이동
```

### 2. 일일 사용 플로우
```
[사장님 관점]
아침 9시
→ 카톡 알림: "어제 리뷰 8개 답변 완료!"
→ 대시보드 확인 (선택)
→ 끝!

[시스템 작동]
자정~새벽
→ 전날 리뷰 수집
→ AI 답변 생성
→ 월/수/금이면 자동 등록
→ 별 3점 이하는 숨김 처리
→ 리포트 발송
```

### 3. 리뷰 관리 플로우
```
[자동 모드]
신규 리뷰 발생
→ 자동 감지
→ 별점 체크
   ├─ 4~5점: 답변 생성 & 등록
   └─ 1~3점: 숨김 처리 & 답변 등록

[수동 모드]
대시보드 접속
→ 리뷰 목록 확인
→ 특정 리뷰 클릭
→ AI 답변 추천 확인
→ 수정 or 그대로 등록
```

---

## UI/UX 가이드라인

### 컬러 시스템
```css
/* 전투적 방어 컨셉 - 강렬함 조절 버전 */

/* Primary */
--battle-red: #dc2626;      /* 메인 CTA, 위험 */
--victory-gold: #fbbf24;    /* 별점, 성공, 강조 */

/* Neutral */
--midnight-black: #0f172a; /* 다크 베이스 */
--slate-900: #0f172a;      /* 배경 */
--slate-800: #1e293b;      /* 카드 */
--slate-700: #334155;      /* 보더 */

/* Status */
--success: #10b981;        /* 완료, 긍정 */
--warning: #f59e0b;        /* 주의 */
--danger: #dc2626;         /* 에러, 악플 */

/* Text */
--text-primary: #ffffff;   /* 메인 텍스트 */
--text-secondary: #94a3b8; /* 서브 텍스트 */
--text-tertiary: #64748b;  /* 비활성 */
```

### 디자인 원칙
1. **강렬함 조절**: 레드는 CTA와 중요 요소에만 사용
2. **가독성 우선**: 다크 배경 + 충분한 대비
3. **계층 구조**: 골드 > 레드 > 화이트 순으로 중요도
4. **일관성**: 동일 액션은 동일 컬러

### 타이포그래피
```css
/* 한글 */
font-family: 'Pretendard', -apple-system, sans-serif;

/* 영문 */
font-family: 'Inter', sans-serif;

/* 크기 */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
```

### 컴포넌트 가이드

#### 버튼
```tsx
// Primary (CTA)
<button className="bg-red-600 hover:bg-red-700 text-white">
  시작하기
</button>

// Secondary
<button className="bg-slate-800 hover:bg-slate-700 text-white">
  취소
</button>

// Ghost
<button className="text-gray-300 hover:text-white">
  더보기
</button>
```

#### 카드
```tsx
<div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
  {children}
</div>
```

#### 뱃지
```tsx
// Success
<span className="bg-green-900/30 text-green-400 border border-green-600/30">
  완료
</span>

// Warning
<span className="bg-amber-900/30 text-amber-400 border border-amber-600/30">
  대기
</span>

// Danger
<span className="bg-red-900/30 text-red-400 border border-red-600/30">
  숨김
</span>
```

---

## 우선순위 및 MVP

### MVP Scope (4주 개발)

#### Week 1: 인프라 & 인증
- [ ] Next.js 프로젝트 세팅
- [ ] Supabase 연동
- [ ] 회원가입/로그인 구현
- [ ] 기본 레이아웃 구조

#### Week 2: 플랫폼 연동 & 크롤링
- [ ] 배민 크롤러 개발 (Playwright)
- [ ] 쿠팡이츠 크롤러 개발
- [ ] 플랫폼 연동 UI
- [ ] 리뷰 데이터 수집 테스트

#### Week 3: AI 답변 & 자동화
- [ ] Claude API 연동
- [ ] 답변 생성 로직 구현
- [ ] 답변 톤앤매너 설정 UI
- [ ] 자동 답변 등록 구현
- [ ] 별점 숨기기 구현

#### Week 4: 대시보드 & 런칭
- [ ] 대시보드 개발
- [ ] 리뷰 목록 UI
- [ ] 통계 차트
- [ ] 스케줄링 설정
- [ ] 알림 시스템 (기본)
- [ ] 베타 테스트
- [ ] 정식 런칭

### Must Have (P0)
- ✅ 배민 리뷰 답변 자동화
- ✅ 쿠팡 리뷰 답변 자동화
- ✅ 별점 숨기기 (배민·쿠팡)
- ✅ 기본 대시보드
- ✅ 답변 톤 설정

### Should Have (P1)
- ⭕ 요기요/땡겨요 지원
- ⭕ 네이버플레이스 지원
- ⭕ 리뷰 분석 기능
- ⭕ 모바일 앱

### Nice to Have (P2)
- 🔵 다점포 관리
- 🔵 팀 협업 기능
- 🔵 화이트라벨 (B2B)

---

## 성공 지표

### 핵심 지표 (North Star Metric)
**월간 답변 처리 리뷰 수**
- 목표: 1만개/월 (런칭 3개월)

### 주요 지표 (KPI)

#### 사용자 지표
```
1. 가입자 수
   - 1개월: 50명
   - 3개월: 200명
   - 6개월: 500명

2. 활성 사용자 (MAU)
   - 1개월: 30명 (60% 유지율)
   - 3개월: 150명 (75% 유지율)

3. 유료 전환율
   - 14일 무료 체험 → 유료: 20%

4. Churn Rate
   - 월간 해지율: <10%
```

#### 제품 지표
```
1. 답변 완료율
   - 목표: >95%
   
2. 평균 답변 생성 시간
   - 목표: <5초

3. 크롤링 성공률
   - 목표: >99%

4. 사용자 만족도 (NPS)
   - 목표: >50
```

#### 비즈니스 지표
```
1. MRR (Monthly Recurring Revenue)
   - 1개월: 100만원
   - 3개월: 1,000만원
   - 6개월: 3,000만원

2. ARPU (Average Revenue Per User)
   - 목표: 79,000원/월

3. LTV (Lifetime Value)
   - 목표: 6개월 유지 = 474,000원

4. CAC (Customer Acquisition Cost)
   - 목표: <100,000원
   - LTV/CAC Ratio: >3
```

#### 임팩트 지표
```
1. 고객 재주문율 상승
   - 측정: 서비스 사용 전/후 비교
   - 목표: 평균 2배 이상 상승

2. 평점 상승
   - 측정: 서비스 사용 전/후 비교
   - 목표: 평균 0.3점 이상 상승

3. 시간 절약
   - 측정: 설문 조사
   - 목표: 일평균 2시간 절약
```

---

## 로드맵

### Phase 1: MVP (1~3개월)
**목표: PMF (Product-Market Fit) 찾기**

```
✅ 배민·쿠팡 리뷰 자동화
✅ 별점 숨기기
✅ 기본 대시보드
✅ 답변 톤 설정
```

**성공 기준:**
- 50명 유료 고객
- NPS 40 이상
- 월 해지율 <15%

### Phase 2: 확장 (4~6개월)
**목표: 플랫폼 확장 & 기능 강화**

```
⭕ 요기요·땡겨요 지원
⭕ 네이버플레이스 지원
⭕ 리뷰 분석 기능
⭕ 모바일 반응형 최적화
⭕ 알림 시스템 고도화
```

**성공 기준:**
- 200명 유료 고객
- NPS 50 이상
- 월 해지율 <10%

### Phase 3: 스케일업 (7~12개월)
**목표: B2B 진출 & 수익 극대화**

```
🔵 다점포 관리 기능
🔵 팀 협업 기능
🔵 화이트라벨 (B2B)
🔵 API 공개
🔵 프랜차이즈 특화 기능
```

**성공 기준:**
- 500명 유료 고객
- B2B 10개 기업
- 월 MRR 3,000만원

---

## 기술 구현 상세

### 데이터베이스 스키마

```sql
-- 사용자
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  phone TEXT,
  plan TEXT DEFAULT 'free', -- free, starter, pro, business
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 매장
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT, -- 치킨, 분식, 중식 등
  tone TEXT DEFAULT 'friendly', -- friendly, formal, energetic
  custom_tone TEXT, -- 사용자 정의 톤
  created_at TIMESTAMP DEFAULT NOW()
);

-- 플랫폼 연동
CREATE TABLE platform_connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  platform TEXT NOT NULL, -- baemin, coupang, yogiyo, etc
  username TEXT NOT NULL,
  password_encrypted TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  last_sync_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 리뷰
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  platform_connection_id UUID REFERENCES platform_connections(id),
  platform TEXT NOT NULL,
  platform_review_id TEXT NOT NULL, -- 플랫폼의 리뷰 ID
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  content TEXT,
  reviewer_name TEXT,
  menu_name TEXT,
  review_date TIMESTAMP,
  is_hidden BOOLEAN DEFAULT false, -- 숨김 여부
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(platform, platform_review_id)
);

-- 답변
CREATE TABLE replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  review_id UUID REFERENCES reviews(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_posted BOOLEAN DEFAULT false, -- 플랫폼에 등록 여부
  posted_at TIMESTAMP,
  generation_method TEXT DEFAULT 'ai', -- ai, manual
  created_at TIMESTAMP DEFAULT NOW()
);

-- 답변 스케줄 설정
CREATE TABLE schedule_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  frequency TEXT DEFAULT 'tue_thu_sat', -- daily, tue_thu_sat
  run_time TIME DEFAULT '02:00:00', -- 새벽 2시
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 별점 숨김 설정
CREATE TABLE hiding_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  platform TEXT NOT NULL,
  min_rating_to_hide INT DEFAULT 3, -- 3점 이하 숨김
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 통계 (일별)
CREATE TABLE daily_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  total_reviews INT DEFAULT 0,
  replied_reviews INT DEFAULT 0,
  hidden_reviews INT DEFAULT 0,
  average_rating DECIMAL(2,1),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(store_id, date)
);
```

### 크롤링 로직 (Playwright)

```typescript
// lib/crawlers/baemin.ts
import { chromium } from 'playwright';

export async function crawlBaeminReviews(storeId: string, credentials: {username: string, password: string}) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // 1. 로그인
    await page.goto('https://ceo.baemin.com/');
    await page.fill('input[name="username"]', credentials.username);
    await page.fill('input[name="password"]', credentials.password);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // 2. 리뷰 페이지 이동
    await page.goto('https://ceo.baemin.com/reviews');
    await page.waitForSelector('.review-item');

    // 3. 리뷰 수집
    const reviews = await page.$$eval('.review-item', items => 
      items.map(item => ({
        id: item.dataset.reviewId,
        rating: parseInt(item.querySelector('.rating')?.textContent || '0'),
        content: item.querySelector('.content')?.textContent?.trim(),
        reviewerName: item.querySelector('.reviewer')?.textContent?.trim(),
        menuName: item.querySelector('.menu')?.textContent?.trim(),
        date: item.querySelector('.date')?.textContent?.trim(),
      }))
    );

    return reviews;
  } finally {
    await browser.close();
  }
}

export async function postBaeminReply(reviewId: string, replyContent: string, credentials: any) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // 로그인 (생략)
    
    // 답변 등록
    await page.goto(`https://ceo.baemin.com/reviews/${reviewId}`);
    await page.fill('textarea[name="reply"]', replyContent);
    await page.click('button.submit-reply');
    await page.waitForSelector('.reply-success');

    return true;
  } finally {
    await browser.close();
  }
}

export async function hideBaeminReview(reviewId: string, credentials: any) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`https://ceo.baemin.com/reviews/${reviewId}`);
    await page.click('button.hide-review');
    await page.click('button.confirm-hide');
    await page.waitForSelector('.hide-success');

    return true;
  } finally {
    await browser.close();
  }
}
```

### AI 답변 생성 (Claude API)

```typescript
// lib/ai/generateReply.ts
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateReply(review: {
  rating: number;
  content: string;
  menuName?: string;
  storeTone: 'friendly' | 'formal' | 'energetic';
  customTone?: string;
}) {
  const toneMap = {
    friendly: '친근하고 편안한 말투 (ㅎㅎ, 이모지 사용)',
    formal: '정중하고 격식있는 말투 (존댓말, 이모지 최소)',
    energetic: '활기차고 밝은 말투 (느낌표, 긍정적)'
  };

  const prompt = `당신은 음식점 사장님입니다. 고객 리뷰에 답변을 작성해주세요.

매장 답변 스타일: ${toneMap[review.storeTone]}
${review.customTone ? `추가 스타일 가이드: ${review.customTone}` : ''}

리뷰 정보:
- 별점: ${review.rating}점
- 내용: ${review.content}
${review.menuName ? `- 주문 메뉴: ${review.menuName}` : ''}

답변 작성 가이드:
1. 50자 이내로 간결하게
2. 별점에 맞는 적절한 감정 온도
3. ${review.rating >= 4 ? '감사 표현 중심' : '개선 의지 표현'}
4. 자연스럽고 진정성 있게

답변만 작성하세요 (부가 설명 없이):`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 200,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  return message.content[0].type === 'text' ? message.content[0].text : '';
}
```

### Cron Job (스케줄링)

```typescript
// app/api/cron/process-reviews/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  // Vercel Cron 인증 확인
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient();

  // 1. 오늘 실행해야 할 매장 찾기
  const today = new Date().getDay(); // 0=일, 1=월, ..., 6=토
  const shouldRunToday = today === 1 || today === 3 || today === 5; // 월수금

  if (!shouldRunToday) {
    return NextResponse.json({ message: 'Not scheduled for today' });
  }

  // 2. 활성 매장 가져오기
  const { data: stores } = await supabase
    .from('stores')
    .select('*, platform_connections(*), schedule_settings(*)')
    .eq('schedule_settings.is_active', true);

  // 3. 각 매장의 리뷰 처리
  for (const store of stores || []) {
    await processStoreReviews(store);
  }

  return NextResponse.json({ success: true });
}

async function processStoreReviews(store: any) {
  // 1. 플랫폼별 리뷰 크롤링
  // 2. 신규 리뷰 감지
  // 3. AI 답변 생성
  // 4. 별점 체크 & 숨김 처리
  // 5. 답변 등록
}
```

---

## 보안 및 개인정보

### 데이터 암호화
- 플랫폼 비밀번호: AES-256 암호화
- 전송: HTTPS/TLS 1.3
- 저장: Supabase Row Level Security

### 개인정보 처리
- 고객 리뷰 데이터: 30일 보관 후 자동 삭제 (선택)
- 플랫폼 계정 정보: 암호화 저장
- GDPR, 개인정보보호법 준수

---

## 마케팅 전략

### 핵심 메시지
**"답변 관리만 잘해도 재주문율 6.5배 ↑ (배민 통계)"**

### 마케팅 채널
1. 네이버 블로그 SEO
2. 메타 광고 (배민 사장님 타겟팅)
3. 유튜브 (배민 사장님 커뮤니티)
4. 입소문 (베타 테스터)

### 랜딩페이지 구조
```
1. 히어로: "재주문율 6.5배 상승"
2. 문제 공감: "새벽 3시 별 2개 알림..."
3. 솔루션: 킬러 피처 3가지
   - 재주문율 상승 (본질)
   - 별점 방어 (킬러)
   - 시간 절약 (효율)
4. 사례: Before/After
5. 가격: 3단계 (29k, 79k, 149k)
6. FAQ: "불법 아닌가요?"
7. CTA: "14일 무료 시작"
```

---

## FAQ (개발팀용)

### Q. 플랫폼 로그인 유지는 어떻게?
A. Playwright의 context storage 기능으로 세션 유지. 만료 시 재로그인.

### Q. 크롤링 감지 우회는?
A. User-Agent 변경, 랜덤 딜레이, 헤드풀 모드 등 조합. IP 블록 시 프록시.

### Q. AI 비용은 얼마나?
A. Claude API: 답변당 약 10~20원. 월 1000개 답변 = 2만원 이하.

### Q. 스케일링 전략은?
A. 크롤링 워커를 별도 인스턴스로 분리. Redis Queue로 작업 분산.

### Q. 법적 리스크는?
A. 플랫폼 이용약관 위반 가능성. 변호사 검토 필요.

---

## 다음 단계

1. ✅ PRD 검토 및 승인
2. ⬜ 디자인 시스템 구축 (Figma)
3. ⬜ 개발 환경 세팅 (Next.js + Supabase)
4. ⬜ Week 1 스프린트 시작
5. ⬜ 베타 테스터 10명 모집

---

**문서 작성:** Claude  
**검토 필요:** 기술 아키텍처, 법무 검토, 비용 산정  
**업데이트 주기:** 2주마다 또는 주요 변경 시

---

_이 문서는 살아있는 문서입니다. 개발 과정에서 지속적으로 업데이트됩니다._