import { PageCta } from "../components/PageCta";
import { PageIntro } from "../components/PageIntro";
import { Seo } from "../components/Seo";
import { aboutCta, aboutIntro, people } from "../content/about";
import { aboutSeo } from "../content/seo";
import "./about.css";

export function AboutPage() {
  return (
    <>
      <Seo entry={aboutSeo} />
      <PageIntro kicker={aboutIntro.kicker} title={aboutSeo.h1} lead={aboutIntro.lead} />
      <section className="section section-follow" aria-labelledby="roster-title">
        <div className="container">
          <div className="about-notes">
            <p>{aboutIntro.summary}</p>
          </div>
          <h2 id="roster-title" className="sr-only">
            五名成员
          </h2>
          <div className="person-list">
            {people.map((person) => (
              <article className="person" key={person.name}>
                <div className="nameplate" aria-hidden="true">
                  {person.surname}
                </div>
                <div>
                  <h2>{person.name}</h2>
                  <p className="summary">{person.summary}</p>
                  <ul className="facts">
                    {person.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta note={aboutCta.note} primary={aboutCta.primary} secondary={aboutCta.secondary} />
    </>
  );
}
