export default function TokushohoPage() {
  const sectionStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const h2Style: React.CSSProperties = {
    marginTop: '48px',
    marginBottom: '16px',
  };

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: '"Noto Sans JP", sans-serif', color: '#676767', backgroundColor: '#fff' }}>
        <section style={sectionStyle}>
          <h1 style={{ marginTop: '60px', marginBottom: '20px', fontFamily: '"Noto Serif JP", serif', fontWeight: 600, color: '#2a2a2c', fontSize: '48px' }}>特定商取引法に基づく表示</h1>
          <h2 style={{ color: '#676767', fontSize: '24px', fontWeight: 'normal' }}>最終更新日：2025年11月1日</h2>

          <div style={{ marginTop: '40px', lineHeight: 1.8 }}>
            <h2 style={h2Style}>販売事業者</h2>
            <p><strong>氏名：</strong> 日高 駿</p>
            <p><strong>所在地：</strong> 請求があり次第遅滞なく開示いたします<br />（福岡県福岡市西区）</p>
            <p><strong>電話番号：</strong> メールにてお問い合わせください</p>
            <p><strong>メールアドレス：</strong> info@bequasar.com</p>
            <p>※個人情報保護のため、詳細な住所・電話番号は、ご購入者様からのご請求があった場合に開示いたします。</p>

            <h2 style={h2Style}>販売価格</h2>
            <p><strong>¥1,680（税込）</strong></p>
            <p>※購入手続きの際に画面に表示される金額が販売価格となります。</p>

            <h2 style={h2Style}>商品代金以外の必要料金</h2>
            <p>アプリのご利用に必要となる通信料金は、お客様のご負担となります。</p>

            <h2 style={h2Style}>支払方法・支払時期</h2>
            <h3>支払方法</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>Apple App Store決済</strong>（iOSの場合）</li>
              <li><strong>Google Play Store決済</strong>（Androidの場合）</li>
            </ul>
            <h3>支払時期</h3>
            <p>購入手続き完了時に、Apple またはGoogleを通じて決済が行われます。</p>

            <h2 style={h2Style}>商品の引渡し時期</h2>
            <p>決済手続き完了後、即時にアプリ内の全機能をご利用いただけます。</p>

            <h2 style={h2Style}>返品・交換・キャンセル等</h2>
            <p>デジタルコンテンツの性質上、購入後の返品・交換・キャンセルには応じられません。</p>
            <p>ただし、Apple App StoreまたはGoogle Play Storeの返金ポリシーに基づく返金申請は可能です。</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><a href="https://support.apple.com/ja-jp/HT204084" target="_blank" rel="noopener noreferrer">Apple - 購入したAppやコンテンツの返金をリクエストする</a></li>
              <li><a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play - 払い戻しをリクエストする</a></li>
            </ul>

            <h2 style={h2Style}>動作環境</h2>
            <h3>iOS版</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>対応OS：</strong> iOS 15.0以上</li>
              <li><strong>対応デバイス：</strong> iPhone、iPad</li>
            </ul>
            <h3>Android版</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>対応OS：</strong> Android 7.0以上</li>
            </ul>
            <p>※上記環境を満たしていても、一部端末では正常に動作しない場合があります。</p>

            <h2 style={h2Style}>お問い合わせ</h2>
            <p>商品やサービスに関するお問い合わせは、以下のメールアドレスまでご連絡ください。</p>
            <p><strong>メールアドレス：</strong> info@bequasar.com</p>
            <p>※お電話でのサポートは承っておりません。<br />※ご返信まで2〜3営業日いただく場合がございます。</p>

            <h2 style={h2Style}>その他</h2>
            <p>本サービスのご利用に際しては、アプリ内に表示される利用規約に同意いただく必要があります。</p>
          </div>
        </section>
      </body>
    </html>
  );
}
