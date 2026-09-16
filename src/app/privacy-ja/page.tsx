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
          <h2 style={{ color: '#676767', fontSize: '24px', fontWeight: 'normal' }}>最終更新日：2026年9月16日</h2>

          <div style={{ marginTop: '40px', lineHeight: 1.8 }}>
            <p>
              Softpoke（以下「当チーム」といいます。）は、お客様のプライバシーの保護を重要視しています。本プライバシーポリシーは、当チームが開発し、Apple
              App Store および Google Play Store
              を通じて提供するすべてのアプリケーションおよびゲーム（以下、総称して「本アプリ」といいます。）において、当チームがお客様の情報をどのように収集、利用、管理するかを説明するものです。
            </p>
            <p>
              本アプリのいずれかをダウンロードまたはご利用いただいた時点で、お客様は本プライバシーポリシーの内容に同意されたものとみなします。個々のアプリに固有の取り扱いについては、各アプリのストア掲載ページに表示される「アプリのプライバシー」（App
              Store）または「データセーフティ」（Google Play）の記載もあわせてご確認ください。
            </p>

            <h2 style={h2Style}>1. 収集する情報</h2>
            <p>収集する情報の範囲は、ご利用になるアプリの機能によって異なります。本アプリでは、以下の情報を収集する場合があります。</p>

            <h3>1.1 お客様から提供される情報</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>アカウント情報</strong>：ユーザー名、ニックネーム、メールアドレス、パスワード（アカウント機能を提供するアプリのみ）</li>
              <li><strong>お問い合わせ内容</strong>：サポート窓口へご連絡いただいた際の内容および返信先情報</li>
            </ul>

            <h3>1.2 自動的に収集される情報</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>デバイス情報</strong>：デバイスの種類、オペレーティングシステムおよびそのバージョン、言語設定</li>
              <li><strong>利用情報</strong>：アプリの利用状況、プレイ記録・学習記録などの進捗データ、アプリ内設定</li>
              <li><strong>不具合情報</strong>：クラッシュログ、エラー情報などの動作記録</li>
              <li><strong>広告識別子</strong>：IDFA（iOS）、広告 ID（Android）（広告を配信するアプリのみ）</li>
            </ul>

            <h3>1.3 収集しない情報</h3>
            <p>当チームは、本アプリを通じて、お客様の氏名、住所、電話番号、クレジットカード情報その他の決済手段の情報を収集することはありません。</p>

            <h2 style={h2Style}>2. 情報の利用目的</h2>
            <p>収集した情報は、以下の目的で利用します：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>本アプリのサービス提供および機能の実行</li>
              <li>進捗データ・セーブデータの保存と管理</li>
              <li>不具合の調査および品質の改善</li>
              <li>本アプリの改善と新機能の開発</li>
              <li>広告の配信および配信結果の測定（広告を配信するアプリのみ）</li>
              <li>お客様からのお問い合わせへの対応</li>
            </ul>
            <p>当チームは、収集した情報を上記の目的以外に利用することはありません。また、お客様の情報を第三者に販売することはありません。</p>

            <h2 style={h2Style}>3. 情報の保存</h2>
            <p>
              お客様の進捗データ・設定は、原則としてお客様のデバイス内に<strong>ローカル保存</strong>され、当チームのサーバーには送信されません。
            </p>
            <p>
              ただし、アカウント機能やクラウド同期、ランキング・オンライン対戦などの機能を提供するアプリにおいては、当該機能の提供に必要な範囲で、当チームまたは当チームが利用するクラウド事業者のサーバーに情報を保存する場合があります。この場合も、保存された情報は本ポリシー第5章に定める安全管理措置のもとで管理されます。
            </p>

            <h2 style={h2Style}>4. 情報の第三者提供</h2>
            <p>当チームは、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
            </ul>

            <h3>4.1 決済サービス</h3>
            <p>
              アプリ内課金または有料機能の購入時には、Apple App Store または Google Play Store
              を通じて決済が処理されます。決済情報は Apple または Google
              によって管理され、当チームが決済情報を取得・保存することはありません。
            </p>

            <h3>4.2 外部サービスの利用</h3>
            <p>
              本アプリでは、機能の提供、品質改善または広告配信のため、以下のような外部サービスを利用する場合があります。これらのサービスにおける情報の取り扱いは、各事業者のプライバシーポリシーに従います。
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>Apple Inc.（App Store、iCloud、Game Center など）</li>
              <li>Google LLC（Google Play、Firebase、Google Analytics、AdMob など）</li>
            </ul>
            <p>いずれのサービスを利用しているかは、各アプリのストア掲載ページのプライバシー関連の記載でご確認いただけます。</p>

            <h2 style={h2Style}>5. 情報の管理</h2>
            <p>当チームは、お客様の情報を適切に管理し、以下の安全管理措置を講じています：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>通信および保存時のデータの暗号化</li>
              <li>アクセス制限</li>
              <li>定期的なセキュリティ対策の見直し</li>
            </ul>

            <h2 style={h2Style}>6. お客様の権利</h2>
            <p>お客様は、以下の権利を有します：</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>アクセス権</strong>：ご自身の個人情報の開示を請求する権利</li>
              <li><strong>訂正権</strong>：個人情報が不正確な場合、訂正を請求する権利</li>
              <li><strong>削除権</strong>：個人情報の削除を請求する権利</li>
              <li><strong>利用停止権</strong>：個人情報の利用の停止を請求する権利</li>
            </ul>
            <p>
              これらの権利を行使される場合は、対象となるアプリ名を明記のうえ、本ポリシー末尾の連絡先までご連絡ください。なお、デバイス内にのみ保存されているデータは、アプリの削除またはアプリ内の初期化機能により、お客様ご自身で削除いただけます。
            </p>

            <h2 style={h2Style}>7. データの保持期間</h2>
            <p>
              当チームは、サービス提供に必要な期間、お客様の情報を保持します。アカウントを削除された場合、または本アプリをデバイスから削除された場合、対象となるデータは削除されます。法令により保存が義務付けられている情報については、当該法令に定める期間保持します。
            </p>

            <h2 style={h2Style}>8. お子様のプライバシー</h2>
            <p>
              本アプリは、原則として13歳未満のお子様を対象としていません。当チームは、13歳未満のお子様の個人情報を故意に収集することはありません。13歳未満のお子様の情報を収集していることが判明した場合、当チームは速やかに当該情報を削除します。保護者の方で、お子様が情報を提供したとお考えの場合は、本ポリシー末尾の連絡先までご連絡ください。
            </p>

            <h2 style={h2Style}>9. プライバシーポリシーの変更</h2>
            <p>
              当チームは、本プライバシーポリシーを随時変更することがあります。変更後のプライバシーポリシーは、本アプリ内またはウェブサイトに掲載した時点で効力を生じます。重要な変更を行う場合は、アプリ内またはウェブサイト上でお知らせします。
            </p>

            <h2 style={h2Style}>10. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するご質問やご意見は、以下までお問い合わせください：</p>
            <p><strong>連絡先メールアドレス：</strong> hi@softpoke.jp</p>
          </div>
        </section>
      </body>
    </html>
  );
}
