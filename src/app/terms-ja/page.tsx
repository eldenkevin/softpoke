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
          <h2 style={{ color: '#676767', fontSize: '24px', fontWeight: 'normal' }}>最終更新日：2026年9月16日</h2>

          <div style={{ marginTop: '40px', lineHeight: 1.8 }}>
            <p>
              本規約は、Softpoke（以下「当チーム」といいます。）が開発し、Apple App Store および Google Play Store
              を通じて提供するすべてのアプリケーションおよびゲーム（以下、総称して「本アプリ」といいます。）の利用に関する条件を定めるものです。
            </p>
            <p>本アプリをダウンロード・インストールし、ご利用いただくことで、本規約に同意したものとみなされます。</p>
            <p>個々のアプリに固有の条件が当該アプリ内に別途表示される場合、その条件が本規約に優先して適用されます。</p>

            <h2 style={h2Style}>第1条（用語の定義）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li><strong>「利用者」</strong>とは、本アプリをダウンロードし、インストールした方を意味します。</li>
              <li><strong>「サービス」</strong>とは、本アプリを通じて提供される各種機能および関連サービスを意味します。</li>
              <li><strong>「有料機能」</strong>とは、有料ダウンロード、アプリ内課金またはサブスクリプションにより提供される機能・コンテンツを意味します。</li>
              <li><strong>「利用データ」</strong>とは、進捗、セーブデータ、スコア、ブックマーク、利用履歴等、利用者の本アプリ利用に関するデータを意味します。</li>
              <li><strong>「ストア」</strong>とは、Apple App Store および Google Play Store を意味します。</li>
            </ol>

            <h2 style={h2Style}>第2条（利用規約の効力及び変更）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>本規約は、本アプリ内または当チームのウェブサイトに掲示することにより効力が発生します。</li>
              <li>当チームは、必要に応じて本規約を変更することができます。</li>
              <li>利用者が変更後も本アプリを継続して利用する場合、変更された規約に同意したものとみなします。</li>
            </ol>

            <h2 style={h2Style}>第3条（サービスの提供）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>当チームは、利用者に対し、各アプリのストア掲載ページに記載された機能および当該アプリ内で提供される機能をサービスとして提供します。提供される機能の内容はアプリごとに異なります。</li>
              <li>当チームは、原則として年中無休・24時間サービスを提供します。ただし、保守、障害、通信環境その他やむを得ない事由により、サービスの全部または一部を一時的に停止する場合があります。</li>
            </ol>

            <h2 style={h2Style}>第4条（有料機能）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>本アプリには、無料で提供されるものと、有料で提供されるものがあります。</li>
              <li>有料機能の価格は<strong>アプリごとに異なり</strong>、各アプリのストア掲載ページおよび購入手続き画面に表示される金額（税込）が販売価格となります。</li>
              <li>有料機能の購入および決済は、すべてストアを通じて行われます。当チームが決済情報を取得・保存することはありません。</li>
              <li>サブスクリプション型の有料機能については、解約手続きは各ストアのアカウント設定から利用者ご自身で行っていただく必要があります。</li>
            </ol>

            <h2 style={h2Style}>第5条（返金・キャンセル）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>デジタルコンテンツの性質上、購入後の返金・キャンセルには原則として応じられません。</li>
              <li>ただし、各ストアの返金ポリシーに基づく返金申請は可能です。返金の可否は各ストアの判断によります。</li>
            </ol>

            <h2 style={h2Style}>第6条（個人情報の保護）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>当チームは、利用者の個人情報を別途定めるプライバシーポリシーに従って取り扱います。</li>
              <li>プライバシーポリシーは本規約の一部を構成します。</li>
            </ol>

            <h2 style={h2Style}>第7条（利用者の義務・禁止事項）</h2>
            <p>利用者は、本アプリの利用にあたり、以下の行為を行ってはなりません。</p>
            <ol style={{ paddingLeft: '20px' }}>
              <li>法令または公序良俗に違反する行為</li>
              <li>本アプリのリバースエンジニアリング、逆コンパイル、改変、複製または再配布</li>
              <li>不正な手段によりアプリ内通貨、スコア、課金アイテム等を取得または行使する行為</li>
              <li>アカウントの第三者への譲渡、貸与または売買</li>
              <li>当チーム、他の利用者または第三者の権利を侵害する行為</li>
              <li>本アプリのサーバーまたはネットワークに過度の負荷をかける行為</li>
              <li>その他、当チームが不適切と判断する行為</li>
            </ol>
            <p>当チームは、利用者が前項に違反したと判断した場合、事前の通知なく当該利用者の本アプリの利用を停止することができます。</p>

            <h2 style={h2Style}>第8条（知的財産権）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>本アプリおよび本アプリに含まれるプログラム、画像、音声、テキストその他一切のコンテンツに関する知的財産権は、当チームまたは正当な権利者に帰属します。</li>
              <li>当チームは利用者に対し、本規約の範囲内で本アプリを非独占的に利用する権利を許諾するものであり、知的財産権を譲渡するものではありません。</li>
            </ol>

            <h2 style={h2Style}>第9条（免責事項）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>当チームは、本アプリの内容の正確性、完全性、有用性および特定目的への適合性について、明示または黙示を問わず保証しません。</li>
              <li>当チームは、本アプリの利用または利用不能により利用者に生じた損害について、当チームに故意または重大な過失がある場合を除き、責任を負いません。</li>
              <li>利用者のデバイスの故障、紛失、機種変更、本アプリの削除等により利用データが消失した場合、当チームは復旧の責任を負いません。</li>
              <li>前各項にかかわらず、当チームが責任を負う場合の賠償額は、当該利用者が本アプリに対して支払った金額を上限とします。</li>
            </ol>

            <h2 style={h2Style}>第10条（サービスの変更・終了）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>当チームは、利用者への事前の通知をもって、本アプリの内容を変更し、または提供を終了することができます。</li>
              <li>本アプリの提供を終了する場合、当チームは合理的な期間をもって、本アプリ内またはストア掲載ページ等で告知します。</li>
              <li>サービスの変更または終了により利用者に生じた損害について、当チームは責任を負いません。</li>
            </ol>

            <h2 style={h2Style}>第11条（通知）</h2>
            <p>当チームから利用者への通知は、本アプリ内での表示、ストア掲載ページへの掲載、当チームのウェブサイトへの掲載またはメールの送信により行います。</p>

            <h2 style={h2Style}>第12条（準拠法および管轄裁判所）</h2>
            <ol style={{ paddingLeft: '20px' }}>
              <li>本規約の解釈および適用は、日本法に準拠します。</li>
              <li>本アプリに関して当チームと利用者との間に紛争が生じた場合、福岡地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
            </ol>

            <h2 style={h2Style}>第13条（お問い合わせ）</h2>
            <p>本規約に関するご質問は、対象となるアプリ名を明記のうえ、以下までお問い合わせください。</p>
            <p><strong>メールアドレス：</strong> hi@softpoke.jp</p>

            <p style={{ marginTop: '40px' }}><strong>附則</strong></p>
            <p>本規約は、2026年9月16日から施行します。</p>
          </div>
        </section>
      </body>
    </html>
  );
}
