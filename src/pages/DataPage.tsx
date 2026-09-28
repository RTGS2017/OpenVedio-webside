import { PageCta } from "../components/PageCta";
import { PageIntro } from "../components/PageIntro";
import { Seo } from "../components/Seo";
import { VideoFrame } from "../components/VideoFrame";
import { aiClips, comparisons, dataCta, dataIntro, dataTypes, robotClips } from "../content/data";
import { dataSeo } from "../content/seo";
import { ScaleIn, SlideIn } from "../motion";
import "./data.css";

const pending = "/media/pending-bench.svg";

export function DataPage() {
  return (
    <>
      <Seo entry={dataSeo} />
      <PageIntro kicker={dataIntro.kicker} title={dataSeo.h1} lead={dataIntro.lead} />

      <section className="section section-follow" aria-labelledby="types-title">
        <div className="container data-block">
          <h2 id="types-title">只有这两类</h2>
          <div className="type-grid">
            {dataTypes.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ai-title">
        <div className="container data-block">
          <div className="section-head">
            <h2 id="ai-title">{aiClips.title}</h2>
            <p className="lead">{aiClips.lead}</p>
          </div>
          <div className="frame-grid">
            {aiClips.items.map((item) => (
              <ScaleIn key={item.filename}>
                <VideoFrame
                  src={item.src}
                  poster={pending}
                  alt={item.alt}
                  badge="AI 生成"
                  filename={item.filename}
                  duration={item.duration}
                  caption=""
                />
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="robot-title">
        <div className="container data-block">
          <div className="section-head">
            <h2 id="robot-title">{robotClips.title}</h2>
            <p className="lead">{robotClips.lead}</p>
          </div>
          <ul className="tags">
            {robotClips.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {robotClips.extra ? <p className="lead">{robotClips.extra}</p> : null}
          <div className="frame-grid">
            {robotClips.items.map((item) => (
              <ScaleIn key={item.filename}>
                <VideoFrame
                  src={item.src}
                  poster={pending}
                  alt={item.alt}
                  badge="内部真机"
                  filename={item.filename}
                  duration={item.duration}
                  caption="可行性初步验证。"
                />
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="compare-title">
        <div className="container data-block">
          <div className="section-head">
            <h2 id="compare-title">{comparisons.title}</h2>
            <p className="lead">{comparisons.lead}</p>
          </div>
          {comparisons.pairs.map((pair, index) => (
            <div className="compare" key={pair.before}>
              <SlideIn from="left">
                <VideoFrame
                  label="普通视频生成模型"
                  src={pair.before}
                  poster="/media/jump-diagram.svg"
                  alt="普通视频生成模型"
                  badge={`对照 ${String(index + 1).padStart(2, "0")}`}
                  filename="text_only.mp4"
                  duration="约 00:06"
                  caption=""
                />
              </SlideIn>
              <SlideIn from="right">
                <VideoFrame
                  label="我们优化后"
                  src={pair.after}
                  poster="/media/smooth-diagram.svg"
                  alt="我们优化后"
                  badge={`对照 ${String(index + 1).padStart(2, "0")}`}
                  filename="ue_reference.mp4"
                  duration="约 00:06"
                  caption=""
                />
              </SlideIn>
            </div>
          ))}
        </div>
      </section>

      <PageCta
        note={dataCta.note}
        primary={dataCta.primary}
        secondary={dataCta.secondary}
      />
    </>
  );
}
