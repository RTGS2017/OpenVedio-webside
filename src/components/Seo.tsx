import { useEffect } from "react";
import { SITE_ORIGIN, sharedImage, type SeoEntry } from "../content/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function Seo({ entry }: { entry: SeoEntry }) {
  useEffect(() => {
    document.title = entry.title;
    document.documentElement.lang = "zh-CN";
    upsertMeta("name", "description", entry.description);
    const pageUrl = `${SITE_ORIGIN}${entry.path === "/" ? "/" : entry.path}`;
    upsertLink("canonical", pageUrl);
    upsertMeta("property", "og:title", entry.title);
    upsertMeta("property", "og:description", entry.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:locale", "zh_CN");
    upsertMeta("property", "og:site_name", "琉音科技");
    upsertMeta("property", "og:image", sharedImage.url);
    upsertMeta("property", "og:image:alt", entry.imageAlt);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", entry.title);
    upsertMeta("name", "twitter:description", entry.description);
    upsertMeta("name", "twitter:image", sharedImage.url);

    let script = document.getElementById("ld-json");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(entry.jsonLd);
  }, [entry]);

  return null;
}
