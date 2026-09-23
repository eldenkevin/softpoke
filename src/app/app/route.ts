import { NextResponse, type NextRequest } from 'next/server';

/**
 * softpoke.jp/app — 한 줄짜리 링크 하나로 모든 기기를 알맞은 스토어로 보낸다.
 *
 * 앱에서 공유하는 문구(초대 코드, 「하트 좀 줘」 등)에 iOS·Android 링크를 둘 다 붙이면
 * 지저분하고, 받는 쪽은 자기 기기에 맞는 걸 골라야 한다. 이 주소 하나면 된다.
 *
 * 판단 순서
 *  1. iPhone / iPad / iPod  → App Store
 *  2. Android               → Google Play
 *  3. Macintosh             → 브라우저에서 한 번 더 판단 (아래 설명)
 *  4. 나머지                 → 홈
 *
 * 3번이 필요한 이유: iPadOS 13+ 는 기본적으로 데스크톱 Safari 인 척해서
 * User-Agent 에 iPad 가 없고 Macintosh 로 온다. 서버에서는 구분할 수 없고
 * navigator.maxTouchPoints 로만 갈라지므로, 이때만 작은 HTML 한 장을 내려
 * 브라우저가 스스로 고르게 한다. 진짜 맥이면 홈으로 넘어간다.
 *
 * 인앱 브라우저(카카오톡·LINE·인스타그램 등)에서도 동작해야 하므로 1·2번은
 * 서버 리다이렉트로 끝낸다 — 자바스크립트에 의존하지 않는다.
 */

const IOS_URL = 'https://apps.apple.com/app/id1436154164';
const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.wishpoke.fanciticon';
const SITE_URL = 'https://softpoke.jp';

/** User-Agent 를 읽어야 하므로 정적으로 굳히지 않는다 */
export const dynamic = 'force-dynamic';

/** iPadOS 판별용 최소 HTML. 자바스크립트가 꺼져 있어도 링크로 빠져나갈 수 있다 */
const IPAD_CHECK_HTML = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Softpoke</title>
<noscript><meta http-equiv="refresh" content="0; url=${SITE_URL}"></noscript>
<style>
  body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;
       justify-content:center;gap:16px;font-family:system-ui,-apple-system,sans-serif;color:#676767}
  a{color:#111;text-decoration:none;border:1px solid #ddd;border-radius:999px;padding:12px 22px}
</style>
</head>
<body>
<p>Opening the store…</p>
<a href="${IOS_URL}">App Store</a>
<a href="${ANDROID_URL}">Google Play</a>
<script>
  // iPadOS 는 Macintosh 로 오지만 터치 포인트가 여러 개다. 진짜 맥은 0 또는 1
  var isIPad = navigator.maxTouchPoints > 1;
  location.replace(isIPad ? ${JSON.stringify(IOS_URL)} : ${JSON.stringify(SITE_URL)});
</script>
</body>
</html>`;

export function GET(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? '';

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return NextResponse.redirect(IOS_URL, 302);
  }
  if (/Android/i.test(ua)) {
    return NextResponse.redirect(ANDROID_URL, 302);
  }
  if (/Macintosh/i.test(ua)) {
    return new NextResponse(IPAD_CHECK_HTML, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  }
  return NextResponse.redirect(SITE_URL, 302);
}
