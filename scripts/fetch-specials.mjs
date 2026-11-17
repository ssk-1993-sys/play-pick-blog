// Steam公式ストアAPI（キー不要）から日本のセール情報を取得して
// src/data/specials.json を生成するスクリプト。
// 使い方: node scripts/fetch-specials.mjs
// GitHub Actionsで定期実行 → push → Cloudflare Pagesが自動再デプロイ、という運用を想定。
import { writeFileSync } from 'node:fs';

const url = 'https://store.steampowered.com/api/featuredcategories?cc=jp&l=japanese';
const res = await fetch(url);
if (!res.ok) throw new Error(`Steam API error: ${res.status}`);
const data = await res.json();

const items = (data.specials?.items ?? []).map((it) => ({
  id: it.id,
  name: it.name,
  original_price: it.original_price ? it.original_price / 100 : null,
  final_price: it.final_price ? it.final_price / 100 : null,
  discount_percent: it.discount_percent ?? 0,
  discount_expiration: it.discount_expiration
    ? new Date(it.discount_expiration * 1000).toISOString()
    : null,
  url: `https://store.steampowered.com/app/${it.id}/`,
}));

writeFileSync(
  new URL('../src/data/specials.json', import.meta.url),
  JSON.stringify({ fetched_at: new Date().toISOString(), items }, null, 2),
);
console.log(`saved ${items.length} specials`);
