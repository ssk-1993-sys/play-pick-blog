# GAME PICK（仮）— 一般向けゲームセールブログ試作

Astro製の静的ブログ。GitHubに置いて、Cloudflare Pagesから公開する前提の試作です。
成人向け作品は扱いません（エロレーンとは完全に分離）。

## ローカル確認
```bash
npm install
npm run dev    # 開発サーバー
npm run build  # dist/ に静的サイトを生成
```

## Cloudflare Pagesへの公開手順（本番化のとき）
1. このフォルダをGitHubの新規リポジトリにpushする（リポジトリはPrivateでOK）
2. Cloudflareに無料登録 → Workers & Pages → Create → Pages → Connect to Git で上のリポジトリを選ぶ
3. ビルド設定: Framework preset = Astro / Build command = `npm run build` / Output = `dist`
4. デプロイされると `https://<プロジェクト名>.pages.dev` のURLが発行される
5. 以後はGitHubにpushするたびに自動で再デプロイされる

## GitHubアカウントの注意
- 公開前に、ログイン通知が来ていた件（2026-11-17夕方、Safari/iOSからのGitHubログイン）が自分の操作か確認すること
- 二要素認証（パスキー等）を有効にしてから連携すること

## 記事のルール（全体設計より）
- PR表示を必ず入れる / 価格に確認日を書く
- Steamキーは「日本で有効化できるか」「日本語対応」を必ず確認して書く
- 購入リンクは各ASPの審査通過後に差し替える（試作では未接続）
- グレーな鍵屋（マーケットプレイス型）は使わない
