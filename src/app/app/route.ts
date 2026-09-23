import { NextResponse, type NextRequest } from 'next/server';

import { landingHtml, pickLang } from './landing';

/**
 * softpoke.jp/app — 한 줄짜리 링크 하나로 모든 기기를 알맞은 곳으로 보낸다.
 *
 * 앱에서 공유하는 문구(초대 코드, 「하트 좀 줘」 등)에 iOS·Android 링크를 둘 다 붙이면
 * 지저분하고, 받는 쪽은 자기 기기에 맞는 걸 골라야 한다. 이 주소 하나면 된다.
 *
 * 판단 순서
 *  1. iPhone / iPad / iPod  → App Store 로 리다이렉트
 *  2. Android               → Google Play 로 리다이렉트
 *  3. 나머지                 → 랜딩 화면 (`landing.ts`, 카오모지 앱과 같은 스티커 스타일)
 *
 * 1·2 는 **서버 리다이렉트**라 자바스크립트가 필요 없다 — 카카오톡·LINE·인스타그램
 * 인앱 브라우저에서도 그대로 스토어로 넘어간다.
 *
 * 3 에서 데스크톱을 홈으로 튕기지 않고 화면을 보여주는 이유: 링크를 PC 로 받은 사람이
 * 그냥 버려지지 않게, 두 스토어 버튼을 직접 고를 수 있게 둔다.
 *
 * iPadOS 13+ 는 기본적으로 데스크톱 Safari 인 척해서 UA 에 iPad 가 없고 Macintosh 로
 * 온다. 서버에서는 구분할 수 없고 navigator.maxTouchPoints 로만 갈라지므로, 맥으로 온
 * 요청의 랜딩 화면에만 판별 스크립트를 넣는다. 터치 되는 윈도우 노트북까지 스토어로
 * 끌려가면 안 되므로 맥에서만 켠다.
 */

const IOS_URL = 'https://apps.apple.com/app/id1436154164';
const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.wishpoke.fanciticon';

/** User-Agent 와 Accept-Language 를 읽어야 하므로 정적으로 굳히지 않는다 */
export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? '';

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return NextResponse.redirect(IOS_URL, 302);
  }
  if (/Android/i.test(ua)) {
    return NextResponse.redirect(ANDROID_URL, 302);
  }

  const lang = pickLang(request.headers.get('accept-language'));
  const html = landingHtml(lang, /Macintosh/i.test(ua));
  return new NextResponse(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
