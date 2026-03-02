export default function PrivacyJaPage() {
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
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: '"Noto Sans JP", sans-serif', color: '#676767', backgroundColor: '#fff' }}>
        <section className="bodySection bodySection-Privacy" style={sectionStyle}>
          <h1 className="privacyTitle" style={{ marginTop: '60px', marginBottom: '20px', fontFamily: '"Noto Serif JP", serif', fontWeight: 600, color: '#2a2a2c' }}>プライバシーポリシー</h1>
          <h2 style={{ color: '#676767', fontSize: '24px', fontWeight: 'normal' }}>最終更新日：2025年11月1日</h2>

          <div style={{ marginTop: '40px', lineHeight: 1.8 }}>
            <p>
              BeQuasar（以下「当社」といいます。）は、お客様のプライバシーの保護を重要視しています。本プライバシーポリシーは、「英単語3000
              - Oxford実用英語」（以下「本アプリ」といいます。）を通じて、当社がお客様の個人情報をどのように収集、利用、管理するかを説明するものです。
            </p>

            <h2 style={h2Style}>1. 収集する情報</h2>
            <h3>1.1 お客様から提供される情報</h3>
            <p>本アプリでは、以下の情報を収集します：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>アカウント情報</strong>：ユーザー名、パスワード</li>
              <li><strong>学習記録</strong>：学習した単語、学習進捗、ブックマーク、連続学習日数</li>
            </ul>

            <h3>1.2 自動的に収集される情報</h3>
            <p>本アプリの利用時に、以下の情報が自動的に収集されます：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>デバイス情報</strong>：デバイスの種類、オペレーティングシステム</li>
              <li><strong>利用情報</strong>：アプリの利用状況、学習パターン</li>
            </ul>

            <h2 style={h2Style}>2. 情報の利用目的</h2>
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>本アプリのサービス提供および機能の実行</li>
              <li>学習進捗の保存と管理</li>
              <li>アプリの改善と新機能の開発</li>
              <li>お客様からのお問い合わせへの対応</li>
            </ul>

            <h2 style={h2Style}>3. 情報の保存</h2>
            <p>お客様の学習記録は、お客様のデバイス内に<strong>ローカル保存</strong>されます（SharedPreferences使用）。当社のサーバーには送信されません。</p>

            <h2 style={h2Style}>4. 情報の第三者提供</h2>
            <p>当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
            </ul>

            <h3>4.1 決済サービス</h3>
            <p>有料機能の購入時には、Apple App StoreまたはGoogle Play Storeを通じて決済が処理されます。決済情報はAppleまたはGoogleによって管理され、当社は決済情報を保存しません。</p>

            <h2 style={h2Style}>5. 情報の管理</h2>
            <p>当社は、お客様の個人情報を適切に管理し、以下の安全管理措置を講じています：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>データの暗号化による保存</li>
              <li>アクセス制限</li>
              <li>定期的なセキュリティ対策の見直し</li>
            </ul>

            <h2 style={h2Style}>6. お客様の権利</h2>
            <p>お客様は、以下の権利を有します：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>アクセス権</strong>：ご自身の個人情報の開示を請求する権利</li>
              <li><strong>訂正権</strong>：個人情報が不正確な場合、訂正を請求する権利</li>
              <li><strong>削除権</strong>：個人情報の削除を請求する権利</li>
            </ul>
            <p>これらの権利を行使される場合は、本ポリシー末尾の連絡先までご連絡ください。</p>

            <h2 style={h2Style}>7. データの保持期間</h2>
            <p>当社は、サービス提供に必要な期間、お客様の個人情報を保持します。アカウントを削除された場合、デバイス内のデータはすべて削除されます。</p>

            <h2 style={h2Style}>8. お子様のプライバシー</h2>
            <p>本アプリは、13歳未満のお子様を対象としていません。13歳未満のお子様の個人情報を故意に収集することはありません。</p>

            <h2 style={h2Style}>9. プライバシーポリシーの変更</h2>
            <p>当社は、本プライバシーポリシーを随時変更することがあります。変更後のプライバシーポリシーは、本アプリ内またはウェブサイトに掲載した時点で効力を生じます。</p>

            <h2 style={h2Style}>10. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するご質問やご意見は、以下までお問い合わせください：</p>
            <p><strong>連絡先メールアドレス：</strong> info@bequasar.com</p>
          </div>
        </section>
      </body>
    </html>
  );
}
