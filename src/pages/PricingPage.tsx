import { PageCta } from "../components/PageCta";
import { PageIntro } from "../components/PageIntro";
import { Seo } from "../components/Seo";
import { SpecTable } from "../components/SpecTable";
import {
  comparison,
  cost,
  market,
  nvidiaNote,
  payback,
  pricingCta,
  pricingIntro,
  pricingModes,
} from "../content/pricing";
import { pricingSeo } from "../content/seo";
import "./pricing.css";

export function PricingPage() {
  return (
    <>
      <Seo entry={pricingSeo} />
      <PageIntro kicker={pricingIntro.kicker} title={pricingSeo.h1} lead={pricingIntro.lead} />

      <section className="section section-follow" aria-labelledby="modes-title">
        <div className="container price-block">
          <h2 id="modes-title" className="sr-only">
            买断定制、标品销售、定制后再销售
          </h2>
          <div className="mode-grid">
            {pricingModes.map((mode) => (
              <article className="card anchor" id={mode.id} key={mode.id}>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
              </article>
            ))}
          </div>
          <p className="lead">{payback}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="market-title">
        <div className="container price-block">
          <div className="section-head">
            <h2 id="market-title">{market.title}</h2>
            <p className="lead">{market.lead}</p>
          </div>
          <SpecTable caption={`${market.title}。${market.lead} 表下有脚注。`} columns={market.columns} rows={market.rows} monoFrom={1} />
          <ol className="footnotes">
            {market.notes.map((note) => (
              <li key={note.id} id={note.id}>
                <span className="mono">{note.mark}</span> {note.text}
              </li>
            ))}
          </ol>
          <p>{market.quality}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="cost-title">
        <div className="container price-block">
          <div className="section-head">
            <h2 id="cost-title">{cost.title}</h2>
          </div>
          <article className="callout">
            <p className="callout-label">{cost.label}</p>
            <p>{cost.target}</p>
          </article>
          <p>{cost.yield}</p>
          <p className="mono">{cost.unit}</p>
          <SpecTable caption={`${cost.title}。${cost.label}。${cost.unit}`} columns={cost.columns} rows={cost.rows} monoFrom={1} />
          <article className="callout">
            <p className="callout-label">{cost.exampleLabel}</p>
            <p>{cost.example}</p>
          </article>
          <div>
            <h3>{cost.rulesTitle}</h3>
            <p className="lead">{cost.rulesLead}</p>
            <ol className="rule-list">
              {cost.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ol>
          </div>
          <p>{cost.gpu}</p>
          <article className="callout">
            <p className="callout-label">效率优化的限制</p>
            <p>{nvidiaNote}</p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="compare-title">
        <div className="container price-block">
          <h2 id="compare-title">{comparison.title}</h2>
          <SpecTable
            caption="传统人力采集与自动化生成的七行对照。右列只用更深一度的底色区分，不是成绩排名。"
            columns={comparison.columns}
            rows={comparison.rows}
            shadeColumn={3}
          />
        </div>
      </section>

      <PageCta
        note={pricingCta.note}
        primary={pricingCta.primary}
        secondary={pricingCta.secondary}
        extra={pricingCta.deliverables}
      />
    </>
  );
}
