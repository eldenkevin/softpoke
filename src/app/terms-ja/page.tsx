export default function TermsJaPage() {
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
          <h1 style={{ marginTop: '60px', marginBottom: '20px', fontFamily: '"Noto Serif JP", serif', fontWeight: 600, color: '#2a2a2c', fontSize: '48px' }}>サービス利用規約</h1>
          <h2 style={{ color: '#676767', fontSize: '24px', fontWeight: 'normal' }}>最終更新日：2025年11月1日</h2>

          <div style={{ marginTop: '40px', lineHeight: 1.8 }}>
            <p>本規約は、BeQuasar（以下「当社」といいます。）が提供する「英単語3000 - Oxford実用英語」（以下「本アプリ」といいます。）の利用に関する条件を定めるものです。</p>
            <p>本アプリをダウンロード・インストールし、ご利用いただくことで、本規約に同意したものとみなされます。</p>

            <h2 style={h2Style}>第1条（用語の定義）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li><strong>「利用者」</strong>とは、本アプリをダウンロードし、インストールした方を意味します。</li>
              <li><strong>「サービス」</strong>とは、本アプリを通じて提供される英単語学習機能及び関連サービスを意味します。</li>
              <li><strong>「有料機能」</strong>とは、アプリ内課金により提供される追加機能を意味します。</li>
              <li><strong>「学習データ」</strong>とは、学習進捗、ブックマーク、学習履歴等、利用者の学習活動に関するデータを意味します。</li>
            </ol>

            <h2 style={h2Style}>第2条（利用規約の効力及び変更）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>本規約は、本アプリ内に掲示することにより効力が発生します。</li>
              <li>当社は、必要に応じて本規約を変更することができます。</li>
              <li>利用者が変更後も本アプリを継続して利用する場合、変更された規約に同意したものとみなします。</li>
            </ol>

            <h2 style={h2Style}>第3条（サービスの提供）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>当社は、利用者に対し以下のサービスを提供します：
                <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                  <li>Oxford 3000英単語の学習機能</li>
                  <li>学習進捗の記録・管理機能</li>
                  <li>ブックマーク機能</li>
                  <li>連続学習日数の記録機能</li>
                </ul>
              </li>
              <li>当社は、原則として年中無休・24時間サービスを提供します。</li>
            </ol>

            <h2 style={h2Style}>第4条（有料機能）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>本アプリは、基本機能を無料で提供します。</li>
              <li>有料機能（フルアクセス）は、<strong>¥1,680（税込）</strong>で提供されます。</li>
              <li>有料機能の購入は、Apple App StoreまたはGoogle Play Storeを通じて行われます。</li>
            </ol>

            <h2 style={h2Style}>第5条（返金・キャンセル）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>デジタルコンテンツの性質上、購入後の返金・キャンセルには原則として応じられません。</li>
              <li>ただし、各ストアの返金ポリシーに基づく返金申請は可能です。</li>
            </ol>

            <h2 style={h2Style}>第6条～第13条</h2>
            <p>個人情報保護、利用者の義務、著作権、免責事項、サービスの変更・終了、通知、準拠法及び管轄裁判所、お問い合わせについての規定を含みます。</p>

            <p style={{ marginTop: '40px' }}><strong>メールアドレス：</strong> info@bequasar.com</p>
            <p><strong>附則</strong></p>
            <p>本規約は、2025年11月1日から施行します。</p>
          </div>
        </section>
      </body>
    </html>
  );
}
