import { PageCta } from "../components/PageCta";
import { PageIntro } from "../components/PageIntro";
import { Seo } from "../components/Seo";
import { SpecTable } from "../components/SpecTable";
import { deliverableColumns, deliverableRows, deliverablesCta, deliverablesIntro } from "../content/deliverables";
import { deliverablesSeo } from "../content/seo";
import "./deliverables.css";

export function DeliverablesPage() {
  return (
    <>
      <Seo entry={deliverablesSeo} />
      <PageIntro kicker={deliverablesIntro.kicker} title={deliverablesSeo.h1} lead={deliverablesIntro.lead} />
      <section className="section section-follow" aria-labelledby="table-title">
        <div className="container">
          <h2 id="table-title" className="sr-only">
            参数表
          </h2>
          <p className="deliver-note">{deliverablesIntro.caution}</p>
          <SpecTable
            caption="可交付参数。只有关节状态写明默认支持保存，其余行按具体列理解，不是整表默认交付。"
            columns={deliverableColumns}
            rows={deliverableRows}
            monoFrom={1}
          />
        </div>
      </section>
      <PageCta
        note={deliverablesCta.note}
        primary={deliverablesCta.primary}
        secondary={deliverablesCta.secondary}
        extra={deliverablesCta.dataLink}
      />
    </>
  );
}
