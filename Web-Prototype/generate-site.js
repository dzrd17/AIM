const fs = require("fs");
const path = require("path");

const projectRoot = __dirname;
const sourceRoot = "D:\\바탕화면\\pyrevit\\DH_Standard.extension";
const detailsDir = path.join(projectRoot, "details");

const tokens = `:root {
  --bg: #f5f1e8;
  --surface: #ffffff;
  --surface-warm: #ffef5a;
  --fg: #000000;
  --fg-2: #222222;
  --muted: #555555;
  --meta: #000000;
  --border: #000000;
  --border-soft: #000000;
  --accent: #ffef5a;
  --accent-on: #000000;
  --accent-hover: color-mix(in oklab, var(--accent), black 8%);
  --accent-active: color-mix(in oklab, var(--accent), black 14%);
  --success: #00b050;
  --warn: #ff8c00;
  --danger: #ff2b2b;
  --font-display: Arial Black, Impact, sans-serif;
  --font-body: Arial, Helvetica, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 17px;
  --text-lg: 20px;
  --text-xl: 28px;
  --text-2xl: 42px;
  --text-3xl: 64px;
  --text-4xl: 88px;
  --leading-body: 1.35;
  --leading-tight: 0.98;
  --tracking-display: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --section-y-desktop: 88px;
  --section-y-tablet: 64px;
  --section-y-phone: 44px;
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 9999px;
  --elev-flat: none;
  --elev-ring: 0 0 0 1px var(--border);
  --elev-raised: 8px 8px 0 #000000;
  --focus-ring: 0 0 0 4px #000000, 0 0 0 8px #ffef5a;
  --motion-fast: 90ms;
  --motion-base: 140ms;
  --ease-standard: steps(2, end);
  --container-max: 1160px;
  --container-gutter-desktop: 36px;
  --container-gutter-tablet: 24px;
  --container-gutter-phone: 16px;
}`;

const styles = `
*,
*::before,
*::after { box-sizing: border-box; }
html { max-width: 100%; overflow-x: hidden; scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-body);
  text-rendering: optimizeLegibility;
}
a { color: inherit; }
button,
input { font: inherit; }
button { cursor: pointer; }
h1,
h2,
h3,
h4 { margin: 0; font-family: var(--font-display); line-height: var(--leading-tight); text-wrap: balance; }
/*
 * Wrapping contract:
 * 1. Keep Korean word units together when a normal line break is available.
 * 2. Let long English labels, API tokens, and paths break before they escape a box.
 * 3. Keep every grid and flex child shrinkable with min-width: 0.
 */
:where(h1, h2, h3, h4, p, li, dt, dd, a, button, span, summary, strong) {
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: keep-all;
}
p,
li,
dd { text-wrap: pretty; }
:where(.meta, .tag, .chip, .tool-count, .source-path, .source-facts div) {
  overflow-wrap: anywhere;
  word-break: break-word;
}
.skip-link {
  position: fixed;
  left: var(--space-4);
  top: -80px;
  z-index: 30;
  padding: var(--space-3) var(--space-4);
  background: var(--accent);
  border: 3px solid var(--border);
  font-family: var(--font-mono);
  font-weight: 700;
}
.skip-link:focus { top: var(--space-4); }
.container {
  width: min(100%, var(--container-max));
  margin-inline: auto;
  padding-inline: var(--container-gutter-desktop);
}
.topnav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--surface);
  border-bottom: 3px solid var(--border);
}
.topnav-inner {
  min-height: 70px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--space-4);
}
.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--fg);
  text-decoration: none;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: -0.04em;
}
.logo-mark {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  background: var(--surface);
  border: 3px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: -0.08em;
}
.nav-links {
  display: flex;
  align-items: stretch;
  border-inline: 2px solid var(--border);
}
.nav-links a {
  display: flex;
  align-items: center;
  padding-inline: var(--space-4);
  border-right: 2px solid var(--border);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
}
.nav-links a:last-child { border-right: 0; }
.nav-links a:hover,
.nav-links a:focus-visible { background: var(--accent); outline: 0; }
.menu-toggle {
  display: none;
  align-self: center;
  min-width: 44px;
  min-height: 44px;
  background: var(--surface);
  border: 3px solid var(--border);
  font-family: var(--font-mono);
  font-weight: 700;
}
.hero {
  padding-block: clamp(var(--section-y-phone), 9vw, var(--section-y-desktop));
  border-bottom: 3px solid var(--border);
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, .65fr);
  gap: var(--space-8);
  align-items: stretch;
}
.hero-grid > *,
.detail-layout > *,
.category-grid > *,
.workflow-grid > *,
.tool-grid > *,
.tool-card-top > *,
.filter-bar > *,
.prev-next > *,
.footer-inner > * { min-width: 0; }
.eyebrow,
.meta,
.tag,
.chip,
.tool-count,
.source-path,
.fact-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
.eyebrow {
  display: inline-block;
  margin: 0 0 var(--space-4);
  padding: var(--space-2) var(--space-3);
  background: var(--accent);
  border: 2px solid var(--border);
  font-weight: 700;
  text-transform: uppercase;
}
.display {
  max-width: 12ch;
  font-size: clamp(54px, 9vw, var(--text-4xl));
  letter-spacing: -0.08em;
}
.lead {
  max-width: 64ch;
  margin: var(--space-5) 0 0;
  color: var(--fg-2);
  font-size: var(--text-lg);
}
.hero-actions,
.filter-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}
.btn {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border: 3px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--fg);
  text-decoration: none;
  font-weight: 700;
  transition: transform var(--motion-fast) var(--ease-standard), background var(--motion-fast) var(--ease-standard);
}
.btn-primary { background: var(--accent); }
.btn-secondary { background: var(--surface); }
.btn:hover { background: var(--accent-hover); transform: translate(-2px, -2px); }
.btn:active { background: var(--accent-active); transform: translate(0, 0); }
.btn:disabled { cursor: not-allowed; opacity: .5; }
.btn:focus-visible,
.chip:focus-visible,
.search:focus-visible,
.menu-toggle:focus-visible,
summary:focus-visible { outline: 0; box-shadow: var(--focus-ring); }
.stat-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: var(--surface);
  border: 3px solid var(--border);
  box-shadow: var(--elev-raised);
}
.stat {
  min-height: 150px;
  padding: var(--space-5);
  border-right: 3px solid var(--border);
}
.stat:last-child { border-right: 0; }
.stat strong {
  display: block;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
  font-family: var(--font-display);
  font-size: clamp(var(--text-2xl), 5vw, var(--text-3xl));
  letter-spacing: -0.08em;
  line-height: .9;
}
.stat strong.word { font-size: clamp(var(--text-xl), 4vw, var(--text-2xl)); }
.stat span {
  display: block;
  margin-top: var(--space-4);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
.section {
  padding-block: var(--section-y-desktop);
  border-bottom: 3px solid var(--border);
}
.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}
.section-head h2 {
  max-width: 16ch;
  font-size: clamp(var(--text-2xl), 5vw, var(--text-3xl));
  letter-spacing: -0.07em;
}
.section-head p { max-width: 56ch; margin: 0; color: var(--muted); }
.category-grid,
.workflow-grid,
.tool-grid {
  display: grid;
  gap: var(--space-5);
}
.category-grid { grid-template-columns: repeat(3, 1fr); }
.workflow-grid { grid-template-columns: repeat(3, 1fr); }
.tool-grid { grid-template-columns: repeat(2, 1fr); }
.panel,
.tile,
.tool-card,
.detail-card {
  background: var(--surface);
  border: 3px solid var(--border);
  border-radius: var(--radius-lg);
}
.panel,
.tile { padding: var(--space-6); }
.panel { box-shadow: var(--elev-raised); }
.panel h3,
.tile h3,
.tool-card h3 {
  font-size: var(--text-xl);
  letter-spacing: -0.05em;
}
.panel p,
.tile p,
.tool-card p { color: var(--muted); }
.category-card {
  display: flex;
  min-height: 270px;
  flex-direction: column;
  justify-content: space-between;
  color: var(--fg);
  text-decoration: none;
}
.category-card:hover,
.category-card:focus-visible {
  background: var(--accent);
  outline: 0;
  transform: translate(-3px, -3px);
}
.category-card .tool-count {
  align-self: flex-start;
  padding: var(--space-2) var(--space-3);
  border: 2px solid var(--border);
  font-weight: 700;
}
.step-list {
  margin: var(--space-5) 0 0;
  padding-left: var(--space-5);
}
.step-list li + li { margin-top: var(--space-2); }
.filter-bar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-4);
  align-items: center;
  margin-bottom: var(--space-6);
}
.search {
  min-height: 52px;
  width: 100%;
  padding-inline: var(--space-4);
  background: var(--surface);
  border: 3px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--fg);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}
.chip {
  min-height: 38px;
  padding: var(--space-2) var(--space-3);
  background: var(--surface);
  border: 2px solid var(--border);
  font-weight: 700;
}
.chip:hover,
.chip[aria-pressed="true"] { background: var(--accent); }
.tool-card {
  display: flex;
  min-height: 245px;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-5);
}
.tool-card:hover { box-shadow: var(--elev-raised); }
.tool-card a { color: inherit; text-decoration: none; }
.tool-card a:hover { text-decoration: underline; text-decoration-thickness: 3px; }
.tool-card-top {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: var(--space-4);
}
.tool-mark {
  display: grid;
  min-width: 42px;
  height: 42px;
  place-items: center;
  border: 2px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
}
.tag {
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--border);
  font-weight: 700;
}
.result-note {
  margin: 0;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
.empty-state {
  display: none;
  padding: var(--space-8);
  background: var(--surface);
  border: 3px dashed var(--border);
  text-align: center;
}
.detail-hero .display { max-width: 15ch; font-size: clamp(var(--text-2xl), 7vw, var(--text-4xl)); }
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
.breadcrumbs a:hover { background: var(--accent); }
.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, .65fr);
  gap: var(--space-6);
  align-items: start;
}
.detail-stack {
  display: grid;
  gap: var(--space-5);
}
.detail-card { padding: var(--space-6); }
.detail-card h2 {
  margin-bottom: var(--space-5);
  font-size: var(--text-xl);
  letter-spacing: -0.05em;
}
.detail-card p:first-of-type { margin-top: 0; }
.detail-card p:last-child { margin-bottom: 0; }
.fact-list {
  display: grid;
  grid-template-columns: minmax(120px, .35fr) minmax(0, 1fr);
  margin: 0;
  border-top: 2px solid var(--border);
}
.fact-list dt,
.fact-list dd {
  margin: 0;
  padding: var(--space-3);
  border-bottom: 2px solid var(--border);
}
.fact-list dt {
  border-right: 2px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
}
.source-path {
  overflow-wrap: anywhere;
  word-break: break-word;
  padding: var(--space-3);
  background: var(--bg);
  border: 2px solid var(--border);
}
.demo-slot {
  display: grid;
  min-width: 0;
  aspect-ratio: 16 / 9;
  align-content: space-between;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--bg);
  border: 3px dashed var(--border);
}
.demo-slot h3 {
  max-width: 18ch;
  font-size: var(--text-xl);
  letter-spacing: -0.05em;
}
.demo-slot p { margin-bottom: 0; }
.demo-ratio {
  justify-self: start;
  padding: var(--space-2) var(--space-3);
  background: var(--surface);
  border: 2px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
}
.callout {
  padding: var(--space-4);
  background: var(--surface);
  border: 3px solid var(--border);
  box-shadow: var(--elev-raised);
  font-weight: 700;
}
details { border-top: 2px solid var(--border); }
summary {
  padding-block: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
}
.source-facts {
  display: grid;
  gap: var(--space-3);
  padding-bottom: var(--space-4);
}
.source-facts div {
  padding: var(--space-3);
  background: var(--bg);
  border: 2px solid var(--border);
}
.source-facts strong {
  display: block;
  margin-bottom: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
.prev-next {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}
.prev-next a { min-height: 80px; }
.footer {
  padding-block: var(--space-8);
  background: var(--fg);
  color: var(--surface);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
[hidden] { display: none !important; }
@media (max-width: 920px) {
  .container { padding-inline: var(--container-gutter-tablet); }
  .section { padding-block: var(--section-y-tablet); }
  .hero-grid,
  .detail-layout { grid-template-columns: 1fr; }
  .category-grid,
  .workflow-grid { grid-template-columns: 1fr; }
}
@media (max-width: 700px) {
  .container { padding-inline: var(--container-gutter-phone); }
  .section { padding-block: var(--section-y-phone); }
  .topnav-inner { min-height: 64px; }
  .menu-toggle { display: block; }
  .nav-links {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 64px;
    background: var(--surface);
    border: 0;
    border-bottom: 3px solid var(--border);
  }
  .nav-links[data-open="true"] { display: grid; }
  .nav-links a {
    min-height: 48px;
    border-right: 0;
    border-top: 2px solid var(--border);
  }
  .display { font-size: clamp(var(--text-2xl), 16vw, var(--text-3xl)); }
  .lead { font-size: var(--text-base); }
  .stat-board { grid-template-columns: 1fr; }
  .stat { min-height: auto; border-right: 0; border-bottom: 3px solid var(--border); }
  .stat:last-child { border-bottom: 0; }
  .section-head { display: grid; gap: var(--space-3); }
  .tool-grid { grid-template-columns: 1fr; }
  .filter-bar { grid-template-columns: 1fr; }
  .fact-list { grid-template-columns: 1fr; }
  .fact-list dt { border-right: 0; background: var(--bg); }
  .prev-next { grid-template-columns: 1fr; }
  .footer-inner { display: grid; }
}`;

const categoryMeta = {
  architecture: {
    label: "건축",
    nav: "ARCH",
    file: "architecture.html",
    intro: "룸, 마감, 면적 경계를 실제 모델과 연결하는 건축 자동화 도구입니다."
  },
  structure: {
    label: "구조",
    nav: "STR",
    file: "structure.html",
    intro: "레벨 설정부터 분할, 슬래브 정렬, 태깅과 수정까지 구조 모델링 흐름을 다룹니다."
  },
  "sheet-general": {
    label: "시트 · 일반",
    nav: "SHEET",
    file: "sheet-general.html",
    intro: "시트 생성과 동기화, 선택 보조, 형상 결합, CAD 정리 같은 공통 작업을 모았습니다."
  }
};

const mechanism = {
  "AreaFromRooms": "선택한 레벨과 Area Scheme을 기준으로 기존 면적 평면을 찾고, Room 경계 세그먼트와 Room Bounding 벽을 면적 경계선으로 변환합니다. 기존 선과 겹치는 경우는 건너뜁니다.",
  "CreateAreaPlan": "레벨과 Area Scheme 선택 UI를 제공하고, 기존 ViewPlan을 재사용하거나 새 Area Plan을 생성합니다. 경계선 작성은 다음 단계인 AreaFromRooms로 분리되어 있습니다.",
  "[A]Slab splitter": "선택한 바닥과 링크 모델 기준 객체의 경계를 평면 곡선으로 수집한 뒤, 분할 가능한 루프를 다시 구성해 건축 바닥을 재생성합니다.",
  "Apply Room Finish": "Room 마감 코드와 Type Mark 또는 타입명을 매칭하고, A+ 타입만 후보로 제한합니다. 변경 요청이 충돌하거나 타입을 찾지 못한 요소는 수정하지 않고 결과창에 남깁니다.",
  "Auto Numbering": "Room 범위를 선택한 뒤 레벨별 일반실 번호와 공통실 코드 규칙을 적용합니다. 감지된 공통실 코드는 WPF 화면에서 검토하고 수정할 수 있습니다.",
  "Boundary Finish": "선택 Room 또는 내부점에서 경계 루프를 계산하고 문 개구부와 기존 마감 요소를 고려해 바닥, 벽, 천장 조합을 생성합니다.",
  "excel to Fin Type": "xlsx_reader와 finish_rules 보조 모듈로 엑셀을 해석합니다. 기준 타입을 Duplicate하고 Type Mark, Description, 재료 구성을 갱신하며 실패 시 트랜잭션을 롤백합니다.",
  "Export to Excel": "배치된 Room을 Number와 Level 기준으로 정렬하고 마감 관련 파라미터를 지정 워크시트에 기록합니다.",
  "Finish type": "Room 경계와 주변 바닥, 벽, 천장을 조회해 마감 기호를 읽고 Room 파라미터를 채웁니다. Base Finish는 접촉한 호스트 벽의 성격으로 판정합니다.",
  "Import from Excel": "엑셀 행을 Room Number로 매칭하고 선택한 마감 파라미터만 갱신합니다. 실행 범위를 UI에서 선택할 수 있습니다.",
  "Join Fin-Door": "Comments에 Finish 또는 마감 표기가 있는 모델링 마감벽과 입력한 타입 문자열에 맞는 인접 호스트 벽을 찾습니다. 확인 단계 뒤 bounded attempt 수 안에서 JoinGeometryUtils.JoinGeometry를 적용합니다.",
  "Join Finish Walls": "Comments에 Finish 또는 마감 표기가 있는 모델링 마감벽과 입력한 타입 문자열에 맞는 인접 호스트 벽을 찾습니다. 확인 단계 뒤 bounded attempt 수 안에서 JoinGeometryUtils.JoinGeometry를 적용합니다.",
  "Linked Line": "선택한 링크 인스턴스의 변환 행렬을 적용해 같은 층 벽 중심선을 현재 평면으로 옮기고 Room Separation Line을 생성합니다.",
  "Room Schedule": "Room 카테고리 스케줄을 만들고 마감 필드, 정렬, 미배치 Room 제외 규칙을 구성합니다.",
  "Fam Type Transfer": "선택 타입을 대상 패밀리에 새 타입으로 복제하고, 호환되는 파라미터를 복사한 뒤 기존 인스턴스의 Symbol을 교체합니다.",
  "MCP API": "Revit 외부 이벤트 핸들러를 생성하고 등록하는 연동 테스트 진입점입니다. 모델 요소를 쓰지 않습니다.",
  "Purge dwg": "ImportInstance와 관련 CAD 타입을 수집해 한 트랜잭션에서 삭제합니다. 실행 결과는 삭제 수로 확인합니다.",
  "SelctSimilar": "기준 요소의 카테고리와 길이를 읽고 현재 뷰 요소를 비교해 허용 오차 안의 후보를 선택 집합으로 바꿉니다.",
  "SelDUP": "요소 타입, 위치와 BoundingBox를 비교 가능한 키로 정규화해 겹친 요소 묶음을 찾고 중복분만 선택합니다.",
  "Super JJ": "선택 요소의 모든 조합을 순회하면서 결합 가능하고 아직 결합되지 않은 쌍에 JoinGeometryUtils를 적용합니다.",
  "Super UJ": "선택 요소 조합 중 실제로 결합된 쌍만 확인하고 JoinGeometryUtils.UnjoinGeometry를 호출합니다.",
  "CeilingToLinkedSlabHatch": "선택 천장과 링크 구조 슬래브 하부를 비교해 단면 영역을 계산하고, 필요한 FilledRegionType을 준비한 뒤 솔리드 채움 영역을 생성합니다.",
  "Copy view": "선택 뷰를 WithDetailing 옵션으로 복제하고 입력한 접미사를 새 이름에 반영합니다.",
  "Create Sheet": "CSV 행과 타이틀 블록을 읽어 시트를 생성 또는 갱신합니다. 시트명에 맞는 평면 뷰를 상세 포함 복제하고 Viewport로 배치합니다.",
  "Crop view": "현재 뷰 CropBox를 읽고 선택한 같은 종류 뷰에 복사하며 CropBoxVisible을 켭니다.",
  "Grid Flip": "선택한 직선 Grid의 곡선을 반대 방향으로 재설정해 시작점과 끝점의 방향을 뒤집습니다.",
  "Sync Sheet Elements": "기준 시트와 대상 시트의 단일 Viewport를 매칭해 타입, 위치, 라벨 위치, 선 길이와 내부 뷰 CropBox를 복사합니다.",
  "SL_creator": "선택 FL 레벨의 층별 기준마감두께를 읽어 대응 SL 레벨을 생성하거나 기존 레벨 높이를 갱신합니다.",
  "SLAB to SL": "선택 구조 바닥마다 가장 가까운 SL 레벨을 찾고 Level과 Height Offset From Level을 다시 지정합니다.",
  "[S]Slab splitter": "Grid, 보, 상세선 또는 Room 경계를 분할선으로 수집하고 선택한 최소 면적보다 큰 조각만 구조 슬래브로 재생성합니다.",
  "COL splitter": "기둥의 기준 레벨 사이 구간을 순회하고 ElementTransformUtils.CopyElements로 층별 기둥을 복제한 뒤 슬래브 두께만큼 상단 오프셋을 내립니다.",
  "Wall splitter": "벽의 기준 레벨 사이 구간을 순회하며 층별 벽을 복제하고 접하는 슬래브 두께를 반영해 상단 Offset을 조정합니다.",
  "Beam-Slab": "선택 구조 보 주변의 슬래브 면을 검색하고 정렬 범위 안에서 보의 Z Offset을 보정합니다.",
  "Column-Slab": "구조 기둥 상단과 하단에서 1500mm 범위 안의 인접 슬래브를 찾고 Base, Top Offset을 맞춥니다.",
  "Wall-Slab": "벽체 상단과 하단에서 1500mm 범위 안의 인접 슬래브를 찾고 Base, Top Offset을 맞춥니다.",
  "BeamSys-Slab": "선택 Beam System 영역의 실제 구조 보 Offset을 참조해 Beam System의 Level Offset을 갱신합니다.",
  "Slab Down": "ReferenceIntersector와 3D 뷰로 링크 건축 바닥을 탐색하고 Fin_THK와 층별 기준마감두께를 조합해 구조 슬래브 Offset을 보정합니다.",
  "topping": "구조 바닥 위쪽 링크 바닥까지의 거리를 계산해 덧침 파라미터를 쓰고, 값별 ParameterFilterElement를 구성합니다.",
  "Copy Door famVer": "선택 링크의 Door 위치와 폭, 높이를 Sync Door Openings 인스턴스와 비교합니다. 새 문은 생성하고 기존 문은 갱신하며 사라진 문은 삭제합니다.",
  "Merge Slab": "선택 바닥의 하단 경계 루프를 결합하고 동일 하단 높이를 검증한 뒤 하나의 Floor로 재생성합니다.",
  "Place LB": "Sync Door Openings 인스턴스를 기준으로 인방보 곡선을 만들고 구조 보 패밀리를 배치합니다. Comments에 연결 ID를 저장해 이후 갱신과 삭제에 사용합니다.",
  "Frame UnJoin": "선택 구조 프레임의 시작점과 끝점에 StructuralFramingUtils.DisallowJoinAtEnd를 적용합니다.",
  "Col Mark Aligned": "선택 또는 현재 뷰의 기둥을 수집하고 기존 태그를 제외한 뒤 지정 Offset 위치에 IndependentTag를 만듭니다.",
  "CSV list to BEAM": "CSV 부재명과 단면 치수를 파싱하고 선택한 구조 프레이밍 패밀리 타입을 복제해 치수와 구조부호를 입력합니다.",
  "Slab Mark Center": "선택 Floor 형상 중심을 계산하고 태그 타입과 방향 선택값으로 IndependentTag를 배치합니다.",
  "#Reset Bsys": "보 시스템 Pin 상태를 기억한 뒤 잠시 해제하고 LayoutRule 또는 Beam Type을 재설정한 다음 기존 Pin 상태를 복원합니다.",
  "Flatten Beam": "선택 직선 구조 보의 양 끝점 Z를 비교해 낮은 값을 기준으로 새 Line을 만들고 LocationCurve를 교체합니다."
};

const requirements = {
  "Apply Room Finish": "excel to Fin Type으로 생성한 A+ 타입과 Comments에 finish 또는 마감 표기가 있는 모델링 마감 요소가 필요합니다.",
  "Auto Numbering": "번호를 부여할 Room 범위와 공통실 코드 규칙을 실행 중 확인하세요.",
  "Boundary Finish": "Room 경계가 닫혀 있어야 하며 사용할 바닥, 벽, 천장 타입을 선택해야 합니다.",
  "excel to Fin Type": "마감 기호 LIST 형식의 xlsx 파일과 기준 타입, 필요한 재료가 프로젝트에 있어야 합니다.",
  "Import from Excel": "먼저 Export to Excel로 생성한 워크시트 구조를 유지하세요.",
  "Join Fin-Door": "Comments에 Finish 또는 마감 표기가 있는 마감벽과 검색할 호스트 벽 타입 문자열을 준비하세요.",
  "Join Finish Walls": "Comments에 Finish 또는 마감 표기가 있는 마감벽과 검색할 호스트 벽 타입 문자열을 준비하세요.",
  "CeilingToLinkedSlabHatch": "단면도 또는 입면도에서 실행하고 링크 구조 모델과 천장 요소를 선택하세요.",
  "Create Sheet": "도면 목록 CSV, 타이틀 블록, 시트명과 연결되는 FL 또는 SL 평면 뷰가 필요합니다.",
  "SL_creator": "FL 레벨에 층별 기준마감두께 매개변수가 입력되어 있어야 합니다.",
  "SLAB to SL": "구조 항목이 체크된 슬래브와 생성된 SL 레벨이 필요합니다.",
  "Slab Down": "Fin_THK, 층별 기준마감두께 매개변수와 사용할 수 있는 3D 뷰가 필요합니다.",
  "topping": "구조 바닥과 링크 건축 바닥을 함께 볼 수 있는 3D 뷰가 필요합니다.",
  "Copy Door famVer": "Sync Door Openings 패밀리와 문이 포함된 건축 링크를 준비하세요.",
  "Place LB": "Sync Door Openings 인스턴스와 사용할 구조 보 패밀리 타입이 필요합니다.",
  "Purge dwg": "삭제 후 복구가 필요한 CAD가 없는지 먼저 확인하세요."
};

const cautions = {
  "Purge dwg": "삭제 작업입니다. 가져온 CAD 인스턴스와 관련 타입이 모델에서 제거됩니다.",
  "Apply Room Finish": "충돌하거나 매칭되지 않은 요소는 자동으로 바꾸지 않습니다. pyRevit 결과창을 확인하세요.",
  "Boundary Finish": "생성 전 타입과 높이 조합을 확인하세요. 닫히지 않은 경계는 처리할 수 없습니다.",
  "Merge Slab": "하단 높이가 다른 바닥은 병합할 수 없습니다.",
  "Create Sheet": "기존 시트가 있으면 갱신합니다. CSV와 현재 프로젝트 시트명을 먼저 대조하세요.",
  "Join Fin-Door": "실행 전 후보 수와 최대 결합 시도 횟수를 확인하세요. 마감벽과 호스트 벽 조합에 형상 결합이 적용됩니다.",
  "Join Finish Walls": "실행 전 후보 수와 최대 결합 시도 횟수를 확인하세요. 마감벽과 호스트 벽 조합에 형상 결합이 적용됩니다.",
  "Copy Door famVer": "링크에서 사라진 문에 대응하는 개구부 인스턴스는 삭제됩니다.",
  "Place LB": "사라진 개구부에 연결된 인방보는 삭제됩니다.",
  "#Reset Bsys": "Pin 상태를 임시로 바꿉니다. 완료 후 기존 상태가 복원되는지 결과를 확인하세요."
};

const localizedTooltip = {
  "Join Fin-Door": "모델링 마감벽을 가까운 호스트벽과 결합하여 호스트벽 개구부가 마감벽에도 반영되도록 합니다. Comments에 Finish 또는 마감이 포함된 마감벽만 대상으로 하고, 입력한 타입 문자열로 호스트벽을 제한하며 실행당 결합 시도 횟수를 제한합니다.",
  "Join Finish Walls": "모델링 마감벽을 가까운 호스트벽과 결합하여 호스트벽 개구부가 마감벽에도 반영되도록 합니다. Comments에 Finish 또는 마감이 포함된 마감벽만 대상으로 하고, 입력한 타입 문자열로 호스트벽을 제한하며 실행당 결합 시도 횟수를 제한합니다."
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "tool";
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() === "old") return [];
      return walk(absolute);
    }
    return [absolute];
  });
}

function parseBundle(bundlePath) {
  const text = fs.readFileSync(bundlePath, "utf8").replace(/^\uFEFF/, "");
  const lines = text.split(/\r?\n/);
  const titleMatch = text.match(/^title:\s*(.+)$/m);
  let title = titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, "") : "";
  const parentName = path.basename(path.dirname(bundlePath)).replace(/\.pushbutton$/i, "");
  if (!title) title = parentName;
  let tooltip = "";
  const start = lines.findIndex((line) => line.startsWith("tooltip:"));
  if (start >= 0) {
    const inline = lines[start].replace(/^tooltip:\s*/, "").trim();
    if (inline && inline !== ">-" && inline !== "|-") tooltip += inline.replace(/^["']|["']$/g, "");
    for (let index = start + 1; index < lines.length; index += 1) {
      const line = lines[index];
      if (line && !/^\s/.test(line)) break;
      if (line.trim()) tooltip += `${tooltip ? " " : ""}${line.trim()}`;
    }
  }
  return { title, tooltip: tooltip || "bundle.yaml에 별도 설명이 없습니다." };
}

function sourceFacts(scriptPath) {
  if (!fs.existsSync(scriptPath)) {
    return { lines: 0, transactions: [], categories: [], ui: [] };
  }
  const text = fs.readFileSync(scriptPath, "utf8").replace(/^\uFEFF/, "");
  const unique = (items) => [...new Set(items)].filter(Boolean);
  const transactions = unique([...text.matchAll(/(?:revit\.)?Transaction\(([^)\r\n]*)\)/g)]
    .map((match) => match[1].replace(/^doc,\s*/, "").replace(/^u?["']|["']$/g, "").trim())
    .filter((value) => value && value.length < 90));
  const categories = unique([...text.matchAll(/BuiltInCategory\.([A-Za-z0-9_]+)/g)].map((match) => match[1]));
  const ui = unique([...text.matchAll(/forms\.([A-Za-z0-9_]+)/g)].map((match) => `forms.${match[1]}`));
  return { lines: text.split(/\r?\n/).length, transactions, categories, ui };
}

function classify(relativePath) {
  if (relativePath.startsWith("DH_Architecture.tab")) {
    const isArea = relativePath.includes("\\area.panel\\");
    return {
      category: "architecture",
      group: isArea ? "면적 평면" : "룸 · 마감",
      groupOrder: isArea ? 2 : 1
    };
  }
  if (relativePath.startsWith("DH_Structure.tab")) {
    if (relativePath.includes("\\01_Setup.panel\\")) return { category: "structure", group: "1단계 · 모델링 틀 잡기", groupOrder: 1 };
    if (relativePath.includes("\\02_Split_Align.panel\\01_Split.stack\\")) return { category: "structure", group: "2단계 · 분할", groupOrder: 2 };
    if (relativePath.includes("\\02_Split_Align.panel\\02_Sync.stack\\")) return { category: "structure", group: "2단계 · 정렬", groupOrder: 3 };
    if (relativePath.includes("\\02_Split_Align.panel\\03_Slab.stack\\")) return { category: "structure", group: "2단계 · 슬래브", groupOrder: 4 };
    if (relativePath.includes("\\02_Split_Align.panel\\04_Misc.stack\\")) return { category: "structure", group: "2단계 · 개구부 · 기타", groupOrder: 5 };
    if (relativePath.includes("\\03_Documentation.panel\\")) return { category: "structure", group: "3단계 · 시트 작업", groupOrder: 6 };
    return { category: "structure", group: "4단계 · 수정", groupOrder: 7 };
  }
  if (relativePath.includes("\\Sheet.panel\\")) return { category: "sheet-general", group: "시트", groupOrder: 1 };
  if (relativePath.includes("\\hatch.panel\\")) return { category: "sheet-general", group: "해치", groupOrder: 2 };
  return { category: "sheet-general", group: "일반", groupOrder: 3 };
}

function collectTools() {
  const bundlePaths = walk(sourceRoot)
    .filter((file) => file.endsWith(`${path.sep}bundle.yaml`))
    .filter((file) => path.basename(path.dirname(file)).endsWith(".pushbutton"));
  return bundlePaths.map((bundlePath) => {
    const relativeBundle = path.relative(sourceRoot, bundlePath);
    const folder = path.basename(path.dirname(bundlePath)).replace(/\.pushbutton$/i, "");
    const scriptPath = path.join(path.dirname(bundlePath), "script.py");
    const relativeScript = path.relative(sourceRoot, scriptPath);
    const meta = parseBundle(bundlePath);
    const classification = classify(relativeBundle);
    const slug = `${classification.category}-${slugify(folder)}`;
    return {
      ...meta,
      ...classification,
      tooltip: localizedTooltip[folder] || meta.tooltip,
      folder,
      slug,
      scriptPath,
      relativeScript,
      facts: sourceFacts(scriptPath),
      mechanism: mechanism[folder] || "bundle.yaml 설명과 script.py의 Revit API 호출을 함께 확인해 적용 범위를 판단하세요.",
      requirements: requirements[folder] || "실행 전 대상 요소, 활성 뷰, 링크 모델 또는 입력 파일이 이 기능의 설명과 맞는지 확인하세요.",
      caution: cautions[folder] || "작업 전 모델을 저장하고 실행 결과와 pyRevit 결과창을 확인하세요."
    };
  }).sort((a, b) =>
    Object.keys(categoryMeta).indexOf(a.category) - Object.keys(categoryMeta).indexOf(b.category)
      || a.groupOrder - b.groupOrder
      || a.title.localeCompare(b.title, "ko")
  );
}

function baseDocument({ title, prefix = "", body, script = "" }) {
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} | DH Standard</title>
  <style>
${tokens}
${styles}
  </style>
</head>
<body>
  <a class="skip-link" href="#content">본문으로 이동</a>
  ${renderHeader(prefix)}
  <main id="content">
${body}
  </main>
  ${renderFooter(prefix)}
  <script>
${commonScript()}
${script}
  </script>
</body>
</html>
`;
}

function renderHeader(prefix = "") {
  return `<header class="topnav" data-od-id="topnav">
    <div class="container topnav-inner">
      <a class="logo" href="${prefix}index.html" aria-label="DH Standard 홈">
        <span class="logo-mark">DH</span>
        <span>DH_STANDARD</span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">MENU</button>
      <nav class="nav-links" id="site-nav" aria-label="주요 탐색">
        <a href="${prefix}architecture.html">ARCH</a>
        <a href="${prefix}structure.html">STR</a>
        <a href="${prefix}sheet-general.html">SHEET</a>
        <a href="${prefix}index.html#categories">ALL TOOLS</a>
      </nav>
    </div>
  </header>`;
}

function renderFooter(prefix = "") {
  return `<footer class="footer" data-od-id="footer">
    <div class="container footer-inner">
      <strong>DH_STANDARD.extension</strong>
      <span>pyRevit 기능 안내 · 현재 배포본 기준</span>
    </div>
  </footer>`;
}

function commonScript() {
  return `  const menuButton = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".nav-links");
  if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = siteNav.dataset.open === "true";
      siteNav.dataset.open = String(!isOpen);
      menuButton.setAttribute("aria-expanded", String(!isOpen));
    });
  }`;
}

function categoryCounts(tools) {
  return Object.fromEntries(Object.keys(categoryMeta).map((key) => [key, tools.filter((tool) => tool.category === key).length]));
}

function toolCard(tool, index, prefix = "") {
  const meta = categoryMeta[tool.category];
  return `<article class="tool-card" data-tool data-category="${tool.category}" data-group="${escapeHtml(tool.group)}" data-search="${escapeHtml(`${tool.title} ${tool.folder} ${tool.group} ${tool.tooltip}`.toLowerCase())}">
    <div>
      <div class="tool-card-top">
        <span class="tool-mark">${String(index + 1).padStart(2, "0")}</span>
        <span class="meta">${escapeHtml(meta.nav)} · ${escapeHtml(tool.group)}</span>
      </div>
      <h3 style="margin-top: var(--space-5);"><a href="${prefix}details/${tool.slug}.html">${escapeHtml(tool.title)}</a></h3>
      <p>${escapeHtml(tool.tooltip)}</p>
    </div>
    <div>
      <div class="tags">
        <span class="tag">${tool.facts.lines} LINES</span>
        <span class="tag">${tool.facts.transactions.length ? "MODEL WRITE" : "READ / EVENT"}</span>
      </div>
      <p class="result-note" style="margin-top: var(--space-4);">상세 구현 보기 →</p>
    </div>
  </article>`;
}

function indexPage(tools) {
  const counts = categoryCounts(tools);
  const categoryCards = Object.entries(categoryMeta).map(([key, meta]) => `<a class="panel category-card" href="${meta.file}">
    <span class="tool-count">${String(counts[key]).padStart(2, "0")} TOOLS</span>
    <div>
      <h3>${meta.label}</h3>
      <p>${meta.intro}</p>
      <strong class="meta">목록 열기 →</strong>
    </div>
  </a>`).join("\n");
  return baseDocument({
    title: "pyRevit 기능 안내",
    body: `    <section class="hero" data-od-id="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">PYREVIT · INTERNAL DOCS</p>
          <h1 class="display">반복 작업을 버튼으로 끝낸다.</h1>
          <p class="lead">DH_Standard.extension의 현재 배포 스크립트를 탭별로 탐색하고, 실행 조건부터 Revit API 구현 방식까지 확인합니다.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#categories">작업 영역 고르기</a>
            <a class="btn btn-secondary" href="structure.html">구조 흐름 보기</a>
          </div>
        </div>
        <div class="stat-board" aria-label="스크립트 현황">
          <div class="stat"><strong>${tools.length}</strong><span>현재 실행 스크립트</span></div>
          <div class="stat"><strong>03</strong><span>리본 탭</span></div>
          <div class="stat"><strong class="word">NOW</strong><span>현재 배포본 기준</span></div>
        </div>
      </div>
    </section>
    <section class="section" data-od-id="categories">
      <div class="container">
        <div class="section-head">
          <h2>작업 영역부터 고른다.</h2>
          <p>리본 탭 구조를 그대로 유지했습니다. 작업 영역을 고르면 해당 탭의 전체 목록과 검색 필터를 바로 사용할 수 있습니다.</p>
        </div>
        <div class="category-grid">
${categoryCards}
        </div>
      </div>
    </section>
    <section class="section" data-od-id="workflows">
      <div class="container">
        <div class="section-head">
          <h2>도구는 흐름으로 기억한다.</h2>
          <p>개별 버튼을 외우기보다 앞뒤 순서를 함께 보면 실무 적용이 빨라집니다.</p>
        </div>
        <div class="workflow-grid">
          <article class="tile">
            <p class="meta">ARCH · ROOM FINISH</p>
            <h3>실내 마감표 만들기</h3>
            <ol class="step-list">
              <li>Linked Wall Sep</li>
              <li>Fin Type by Excel</li>
              <li>Boundary Finish · Join Fin-Door</li>
              <li>Room Finish Params</li>
              <li>Auto Number · Room Schedule</li>
              <li>Excel 내보내기 · 가져오기</li>
            </ol>
          </article>
          <article class="tile">
            <p class="meta">STR · MODELING</p>
            <h3>구조 모델 정렬하기</h3>
            <ol class="step-list">
              <li>SL Creator · Slab to SL</li>
              <li>기둥 · 벽 · 슬래브 분할</li>
              <li>Beam · Column · Wall Sync</li>
              <li>Slab Down · Topping</li>
              <li>개구부 · 인방보 동기화</li>
            </ol>
          </article>
          <article class="tile">
            <p class="meta">SHEET · DELIVERY</p>
            <h3>도면 세트 정리하기</h3>
            <ol class="step-list">
              <li>뷰 상세 포함 복제</li>
              <li>CSV 기반 시트 생성</li>
              <li>자르기 영역 복사</li>
              <li>시트 요소 동기화</li>
              <li>그리드 방향 정리</li>
            </ol>
          </article>
        </div>
      </div>
    </section>`,
    script: ""
  });
}

function globalSearchScript(tools) {
  const searchIndex = tools.map((tool) => ({
    title: tool.title,
    summary: tool.tooltip,
    category: tool.category,
    group: tool.group,
    href: `details/${tool.slug}.html`,
    lines: tool.facts.lines
  }));
  return `  const searchIndex = ${JSON.stringify(searchIndex)};
  const searchInput = document.querySelector("#tool-search");
  const clearButton = document.querySelector("#clear-search");
  const chips = [...document.querySelectorAll("[data-filter]")];
  const resultNote = document.querySelector("#result-note");
  const results = document.querySelector("#search-results");
  const emptyState = document.querySelector("#empty-state");
  let activeFilter = "all";
  const renderCard = (tool, index) => {
    const article = document.createElement("article");
    article.className = "tool-card";
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = String(index + 1).padStart(2, "0") + " · " + tool.group;
    const heading = document.createElement("h3");
    const link = document.createElement("a");
    link.href = tool.href;
    link.textContent = tool.title;
    heading.append(link);
    const summary = document.createElement("p");
    summary.textContent = tool.summary;
    const note = document.createElement("p");
    note.className = "result-note";
    note.textContent = tool.lines + " LINES · 상세 구현 보기 →";
    article.append(meta, heading, summary, note);
    return article;
  };
  const applyFilters = () => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const matches = query ? searchIndex.filter((tool) => {
      const categoryMatch = activeFilter === "all" || tool.category === activeFilter;
      const textMatch = (tool.title + " " + tool.summary + " " + tool.group).toLowerCase().includes(query);
      return categoryMatch && textMatch;
    }) : [];
    results.replaceChildren(...matches.map(renderCard));
    if (resultNote) resultNote.textContent = query ? matches.length + "개 기능 표시 중" : searchIndex.length + "개 기능 검색 가능";
    if (emptyState) {
      emptyState.textContent = query ? "검색 조건에 맞는 기능이 없습니다." : "검색어를 입력하세요.";
      emptyState.style.display = matches.length ? "none" : "block";
    }
  };
  searchInput?.addEventListener("input", applyFilters);
  clearButton?.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    applyFilters();
  });
  chips.forEach((chip) => chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((item) => item.setAttribute("aria-pressed", String(item === chip)));
    applyFilters();
  }));`;
}

function categoryPage(tools, category) {
  const meta = categoryMeta[category];
  const records = tools.filter((tool) => tool.category === category);
  const groups = [...new Set(records.map((tool) => tool.group))];
  const cards = records.map((tool, index) => toolCard(tool, index)).join("\n");
  return baseDocument({
    title: `${meta.label} 기능`,
    body: `    <section class="hero" data-od-id="hero">
      <div class="container">
        <p class="eyebrow">${meta.nav} · TOOL INDEX</p>
        <h1 class="display">${meta.label}<br />기능 목록.</h1>
        <p class="lead">${meta.intro}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#catalog">기능 찾기</a>
          <a class="btn btn-secondary" href="index.html">메인 안내</a>
        </div>
      </div>
    </section>
    <section class="section" id="catalog" data-od-id="catalog">
      <div class="container">
        <div class="section-head">
          <h2>${String(records.length).padStart(2, "0")}개 도구.</h2>
          <p>실제 리본 구성의 작업 묶음을 유지했습니다. 검색하거나 그룹 필터를 눌러 상세 페이지로 이동하세요.</p>
        </div>
        <div class="filter-bar">
          <input class="search" id="tool-search" type="search" placeholder="${meta.label} 기능 검색" aria-label="${meta.label} 기능 검색" />
          <button class="btn btn-secondary" id="clear-search" type="button">검색 초기화</button>
        </div>
        <div class="chips" role="group" aria-label="그룹 필터">
          <button class="chip" type="button" data-filter="all" aria-pressed="true">ALL · ${records.length}</button>
          ${groups.map((group) => `<button class="chip" type="button" data-filter="${escapeHtml(group)}" aria-pressed="false">${escapeHtml(group)}</button>`).join("\n          ")}
        </div>
        <p class="result-note" id="result-note">${records.length}개 기능 표시 중</p>
        <div class="tool-grid" style="margin-top: var(--space-4);">
${cards}
        </div>
        <div class="empty-state" id="empty-state">검색 조건에 맞는 기능이 없습니다.</div>
      </div>
    </section>`,
    script: categoryFilterScript()
  });
}

function categoryFilterScript() {
  return `  const searchInput = document.querySelector("#tool-search");
  const clearButton = document.querySelector("#clear-search");
  const chips = [...document.querySelectorAll("[data-filter]")];
  const toolCards = [...document.querySelectorAll("[data-tool]")];
  const resultNote = document.querySelector("#result-note");
  const emptyState = document.querySelector("#empty-state");
  let activeFilter = "all";
  const applyFilters = () => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visible = 0;
    toolCards.forEach((card) => {
      const groupMatch = activeFilter === "all" || card.dataset.group === activeFilter;
      const textMatch = !query || card.dataset.search.includes(query);
      card.hidden = !(groupMatch && textMatch);
      if (!card.hidden) visible += 1;
    });
    if (resultNote) resultNote.textContent = visible + "개 기능 표시 중";
    if (emptyState) emptyState.style.display = visible ? "none" : "block";
  };
  searchInput?.addEventListener("input", applyFilters);
  clearButton?.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    applyFilters();
  });
  chips.forEach((chip) => chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    chips.forEach((item) => item.setAttribute("aria-pressed", String(item === chip)));
    applyFilters();
  }));`;
}

function renderFacts(facts) {
  return `<div class="source-facts">
    <div><strong>SCRIPT SIZE</strong>${facts.lines ? `${facts.lines} lines` : "script.py 없음"}</div>
    <div><strong>TRANSACTION</strong>${escapeHtml(facts.transactions.join(" · ") || "모델 변경 트랜잭션 없음")}</div>
    <div><strong>REVIT CATEGORY</strong>${escapeHtml(facts.categories.join(" · ") || "명시적 BuiltInCategory 참조 없음")}</div>
    <div><strong>PYREVIT UI</strong>${escapeHtml(facts.ui.join(" · ") || "별도 forms UI 호출 없음")}</div>
  </div>`;
}

function detailPage(tool, tools) {
  const meta = categoryMeta[tool.category];
  const peers = tools.filter((item) => item.category === tool.category);
  const index = peers.findIndex((item) => item.slug === tool.slug);
  const previous = peers[(index - 1 + peers.length) % peers.length];
  const next = peers[(index + 1) % peers.length];
  return baseDocument({
    title: tool.title,
    prefix: "../",
    body: `    <section class="hero detail-hero" data-od-id="hero">
      <div class="container">
        <div class="breadcrumbs">
          <a href="../index.html">HOME</a><span>/</span>
          <a href="../${meta.file}">${escapeHtml(meta.label)}</a><span>/</span>
          <span>${escapeHtml(tool.group)}</span>
        </div>
        <p class="eyebrow">${escapeHtml(meta.nav)} · ${escapeHtml(tool.group)}</p>
        <h1 class="display">${escapeHtml(tool.title)}</h1>
        <p class="lead">${escapeHtml(tool.tooltip)}</p>
      </div>
    </section>
    <section class="section" data-od-id="details">
      <div class="container detail-layout">
        <div class="detail-stack">
          <article class="detail-card">
            <h2>사용 순서</h2>
            <ol class="step-list">
              <li>${escapeHtml(tool.requirements)}</li>
              <li>pyRevit 리본에서 <strong>${escapeHtml(tool.title)}</strong> 버튼을 실행합니다.</li>
              <li>선택창이나 입력창이 열리면 현재 모델의 작업 범위에 맞게 값을 확인합니다.</li>
              <li>완료 후 모델 변경 결과와 pyRevit 결과창을 함께 확인합니다.</li>
            </ol>
          </article>
          <article class="detail-card">
            <h2>구현 방식</h2>
            <p>${escapeHtml(tool.mechanism)}</p>
            <details open>
              <summary>script.py에서 읽은 구현 단서</summary>
              ${renderFacts(tool.facts)}
            </details>
          </article>
          <article class="detail-card">
            <h2>소스 위치</h2>
            <p class="source-path" id="source-path">${escapeHtml(tool.relativeScript)}</p>
            <button class="btn btn-secondary" id="copy-path" type="button">경로 복사</button>
          </article>
          <article class="detail-card">
            <h2>시연 미디어</h2>
            <div class="demo-slot" data-demo-media="" data-demo-type="">
              <div>
                <p class="meta">DEMO MEDIA · RESERVED</p>
                <h3>GIF 또는 동영상 재생 영역</h3>
                <p>시연 파일이 준비되면 이 영역에 연결합니다. 기능별 화면 흐름을 16:9 비율로 보여줄 수 있습니다.</p>
              </div>
              <span class="demo-ratio">16:9 · GIF / MP4 / WEBM</span>
            </div>
          </article>
          <nav class="prev-next" aria-label="이전 다음 기능">
            <a class="btn btn-secondary" href="${previous.slug}.html">← ${escapeHtml(previous.title)}</a>
            <a class="btn btn-primary" href="${next.slug}.html">${escapeHtml(next.title)} →</a>
          </nav>
        </div>
        <aside class="detail-stack">
          <div class="callout">${escapeHtml(tool.caution)}</div>
          <article class="detail-card">
            <h2>분류</h2>
            <dl class="fact-list">
              <dt>탭</dt><dd>${escapeHtml(meta.label)}</dd>
              <dt>그룹</dt><dd>${escapeHtml(tool.group)}</dd>
              <dt>버튼 폴더</dt><dd>${escapeHtml(tool.folder)}</dd>
              <dt>문서 기준</dt><dd>현재 배포본만 반영</dd>
            </dl>
          </article>
          <a class="btn btn-secondary" href="../${meta.file}">${escapeHtml(meta.label)} 목록으로 돌아가기</a>
        </aside>
      </div>
    </section>`,
    script: `  const copyButton = document.querySelector("#copy-path");
  copyButton?.addEventListener("click", async () => {
    const pathText = document.querySelector("#source-path")?.textContent || "";
    try {
      await navigator.clipboard.writeText(pathText);
      copyButton.textContent = "복사 완료";
    } catch {
      copyButton.textContent = "경로를 직접 선택하세요";
    }
  });`
  });
}

function writeFile(relativePath, content) {
  const target = path.join(projectRoot, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, "utf8");
}

function main() {
  fs.mkdirSync(detailsDir, { recursive: true });
  const tools = collectTools();
  const expectedDetails = new Set(tools.map((tool) => `${tool.slug}.html`));
  for (const entry of fs.readdirSync(detailsDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".html") && !expectedDetails.has(entry.name)) {
      fs.unlinkSync(path.join(detailsDir, entry.name));
    }
  }
  const homePage = indexPage(tools);
  writeFile("index.html", homePage);
  writeFile("dh-standard-pyrevit-docs.html", homePage);
  for (const category of Object.keys(categoryMeta)) {
    writeFile(categoryMeta[category].file, categoryPage(tools, category));
  }
  for (const tool of tools) {
    writeFile(path.join("details", `${tool.slug}.html`), detailPage(tool, tools));
  }
  const summary = {
    generatedAt: new Date().toISOString(),
    sourceRoot,
    excludedDirectories: ["old"],
    total: tools.length,
    categories: categoryCounts(tools),
    files: 5 + tools.length
  };
  writeFile("site-summary.json", `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary, null, 2));
}

main();
