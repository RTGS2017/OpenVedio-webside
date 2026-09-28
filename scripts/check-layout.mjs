import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootPath = fileURLToPath(new URL("..", import.meta.url));

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === "dist") continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, acc);
    else if ([".css", ".tsx", ".ts", ".html", ".svg"].includes(extname(name))) acc.push(full);
  }
  return acc;
}

const files = walk(rootPath);
const errors = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    const at = `${file}:${index + 1}`;
    if (/100vw/.test(line)) errors.push(`${at} 使用了 100vw`);
    if (/scroll-snap/.test(line)) errors.push(`${at} 使用了 scroll-snap`);
    const width = line.match(/(?<![\w-])width:\s*(\d+)px/);
    if (width && Number(width[1]) >= 1200) errors.push(`${at} 固定宽度 ${width[1]}px`);
    const minWidth = line.match(/min-width:\s*(\d+)px/);
    if (minWidth && Number(minWidth[1]) >= 1100) errors.push(`${at} min-width ${minWidth[1]}px`);
  });
}

const home = readFileSync(join(rootPath, "src/content/home.ts"), "utf8");
for (const banned of ["0.10", "3 倍", "Get Started", "立即体验", "免费试用", "预约演示", "unsplash"]) {
  if (home.includes(banned)) errors.push(`home.ts 含有不应出现的内容：${banned}`);
}

const all = files
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".html"))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

if (/mailto:/i.test(all)) errors.push("发现 mailto:");
if (/\.mp4/.test(all) && /src=.*\.mp4|source[^>]+mp4/.test(all)) {
  errors.push("发现指向 mp4 的资源");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`layout check ok, scanned ${files.length} files`);
