/**
 * softpoke.jp/app 의 랜딩 화면.
 *
 * 폰에서는 이 화면을 볼 일이 없다 — 서버가 바로 스토어로 보낸다(route.ts).
 * 여기가 보이는 경우는 데스크톱, 그리고 데스크톱인 척하는 iPadOS 뿐이다.
 *
 * 디자인은 카오모지 앱의 스티커 스타일을 그대로 옮겼다
 * (`lib/theme/app_palette.dart`, `lib/widgets/sticker_ui.dart`):
 *  - 크림 바탕 #FBF6EC 에 18px 간격 점무늬 #EAE0CB
 *  - 1.6px 검정 테두리 + 3px 오프셋 그림자, 둥근 모서리
 *  - 파스텔 타일에 카오모지, 살짝 기울여 붙인 스티커처럼
 *  - 제목 Fraunces 900 / 숫자 JetBrains Mono 700 (한글·일본어는 기기 글꼴로 대체)
 */

const IOS_URL = 'https://apps.apple.com/app/id1436154164';
const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.wishpoke.fanciticon';
const SITE_URL = 'https://softpoke.jp';

export type Lang = 'ja' | 'en' | 'ko';

const COPY: Record<Lang, {
  name: string;
  tagline: string;
  lead: string;
  ios: string;
  android: string;
  onPhone: string;
  htmlLang: string;
}> = {
  ja: {
    name: 'カワスタ',
    tagline: '顔文字をワンタップでコピー',
    lead: '4000以上の顔文字と絵文字を、タップしてコピー。ミニゲームも33本ついてくる。',
    ios: 'App Store',
    android: 'Google Play',
    onPhone: 'スマホで開くと、お使いの端末のストアへ自動で移動します。',
    htmlLang: 'ja',
  },
  en: {
    name: 'Kaomoji',
    tagline: 'Copy a kaomoji with one tap',
    lead: 'Over 4,000 text faces and emoji, copied with a tap. Plus 33 little games.',
    ios: 'App Store',
    android: 'Google Play',
    onPhone: 'Open this link on your phone and it takes you straight to your store.',
    htmlLang: 'en',
  },
  ko: {
    name: '인싸티콘',
    tagline: '카오모지를 탭 한 번으로 복사',
    lead: '4000개가 넘는 텍스트 이모티콘과 이모지를 탭 한 번으로 복사. 덤으로 미니게임 33개.',
    ios: 'App Store',
    android: 'Google Play',
    onPhone: '폰에서 이 링크를 열면 쓰는 기기의 스토어로 바로 이동해요.',
    htmlLang: 'ko',
  },
};

/** 앱에서 쓰는 얼굴들 (`KaoBubbleCycle` 과 같은 결) */
const FACES = ['ʕ•ﻌ•ʔ', '(•ᴗ•)', '(＾▽＾)ノ'];

/** 파스텔: butter · lav · mint */
const TILE_COLORS = ['#FFF0B8', '#E9E1FF', '#DDF3EC'];

const ESCAPE: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ESCAPE[c]);

/**
 * @param lang     보여줄 언어
 * @param ipadHint Macintosh 로 온 요청인지. iPadOS 13+ 는 데스크톱 UA 를 보내므로
 *                 이때만 브라우저에서 navigator.maxTouchPoints 로 한 번 더 가른다.
 *                 터치 되는 윈도우 노트북이 스토어로 끌려가지 않도록 맥에서만 켠다.
 */
export function landingHtml(lang: Lang, ipadHint: boolean): string {
  const t = COPY[lang];

  const tiles = FACES.map((face, i) => {
    const tilt = [-4, 2.5, -1.5][i];
    return `<div class="tile" style="background:${TILE_COLORS[i]};transform:rotate(${tilt}deg)">${esc(face)}</div>`;
  }).join('');

  const ipadScript = ipadHint
    ? `<script>
// iPadOS 는 Macintosh 로 오지만 터치 포인트가 여러 개다. 진짜 맥은 0 또는 1
if (navigator.maxTouchPoints > 1) location.replace(${JSON.stringify(IOS_URL)});
</script>`
    : '';

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>${esc(t.name)}</title>
<meta name="description" content="${esc(t.tagline)}">
<link rel="icon" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<style>
  :root{
    --ground:#FBF6EC; --dot:#EAE0CB; --ink:#1F1D1A; --card:#fff;
    --subtle:#5C574D; --faint:#B8AE9A; --accent:#6D3BFF;
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0}
  body{
    min-height:100svh; background-color:var(--ground);
    /* 앱 DotGround: 18px 간격, 반지름 1.1 */
    background-image:radial-gradient(var(--dot) 1.1px, transparent 1.2px);
    background-size:18px 18px; background-position:9px 9px;
    color:var(--ink);
    font-family:"Helvetica Neue",-apple-system,BlinkMacSystemFont,"Segoe UI",
                "Hiragino Sans","Noto Sans JP","Apple SD Gothic Neo","Malgun Gothic",sans-serif;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    gap:18px; padding:40px 20px;
  }
  .card{
    width:100%; max-width:420px; background:var(--card);
    border:1.6px solid var(--ink); border-radius:24px;
    box-shadow:3px 3px 0 var(--ink);
    padding:30px 24px 26px; text-align:center;
  }
  .tiles{display:flex; justify-content:center; gap:10px; margin-bottom:22px}
  .tile{
    flex:1; min-width:0; padding:14px 6px; background:#FFF0B8;
    border:1.6px solid var(--ink); border-radius:18px; box-shadow:2px 2px 0 var(--ink);
    font-size:15px; font-weight:700; white-space:nowrap;
    overflow:hidden; text-overflow:ellipsis;
  }
  h1{
    font-family:"Fraunces",Georgia,serif; font-weight:900;
    font-size:34px; line-height:1.15; margin:0 0 8px;
  }
  .tagline{font-size:15px; font-weight:700; color:var(--subtle); margin:0 0 6px}
  .lead{font-size:13.5px; line-height:1.6; font-weight:600; color:var(--subtle); margin:0 0 24px}
  .pill{
    display:flex; align-items:center; justify-content:center; gap:8px;
    height:52px; margin-bottom:10px; text-decoration:none;
    border:1.6px solid var(--ink); border-radius:999px; box-shadow:3px 3px 0 var(--ink);
    font-size:15px; font-weight:800; color:var(--ink); background:var(--card);
    transition:transform .08s ease, box-shadow .08s ease;
  }
  .pill.primary{background:var(--accent); color:#fff}
  .pill:active{transform:translate(3px,3px); box-shadow:none}
  .pill svg{width:18px; height:18px; flex:none}
  .note{
    font-family:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
    font-size:11px; font-weight:700; color:var(--faint);
    margin:16px 0 0; line-height:1.6;
  }
  .foot{font-size:12px; font-weight:700; color:var(--faint); text-decoration:none}
  .foot:hover{color:var(--subtle)}
  @media (max-width:360px){ h1{font-size:28px} .tile{font-size:13px} }
</style>
</head>
<body>
  <main class="card">
    <div class="tiles">${tiles}</div>
    <h1>${esc(t.name)}</h1>
    <p class="tagline">${esc(t.tagline)}</p>
    <p class="lead">${esc(t.lead)}</p>

    <a class="pill primary" href="${IOS_URL}">
      <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
      ${esc(t.ios)}
    </a>
    <a class="pill" href="${ANDROID_URL}">
      <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 65.5 65.7 65.5 60.1-34.1c18-14.3 18-46.5-1.2-62.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
      ${esc(t.android)}
    </a>

    <p class="note">${esc(t.onPhone)}</p>
  </main>
  <a class="foot" href="${SITE_URL}">Softpoke</a>
${ipadScript}
</body>
</html>`;
}

/** Accept-Language 에서 이 사이트가 지원하는 언어를 고른다. 기본은 사이트 기본값 ja */
export function pickLang(header: string | null): Lang {
  const v = (header ?? '').toLowerCase();
  const first = v.split(',')[0]?.trim() ?? '';
  if (first.startsWith('ko')) return 'ko';
  if (first.startsWith('en')) return 'en';
  if (first.startsWith('ja')) return 'ja';
  // 첫 순위가 아니어도 들어 있으면 그걸 쓴다
  if (v.includes('ko')) return 'ko';
  if (v.includes('en')) return 'en';
  return 'ja';
}
