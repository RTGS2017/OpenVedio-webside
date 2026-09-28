import { useRef } from "react";
import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { VideoFrame } from "../components/VideoFrame";
import {
  homeAdvantages,
  homeFeatures,
  homeFinal,
  homeHero,
  homeProblem,
  homeShowcase,
  homeSolution,
  homeUseCases,
  homeValue,
  homeVideo,
  homeWorkflow,
} from "../content/home";
import { homeSeo } from "../content/seo";
import { ScaleIn, ScrollReveal, SlideIn, Stagger, useHeroScroll, useInViewKey, useScrollProgress } from "../motion";
import "../components/page-blocks.css";
import "./home.css";

const featureIds = homeFeatures.items.map((item) => item.id);

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  useHeroScroll(heroRef);
  useScrollProgress(flowRef);
  const { active, select } = useInViewKey(featureIds);
  const activeFeature = homeFeatures.items.find((item) => item.id === active) ?? homeFeatures.items[0];

  return (
    <>
      <Seo entry={homeSeo} />
      <section className="hero" ref={heroRef} aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">{homeHero.kicker}</p>
            <h1 id="hero-title">{homeHero.h1}</h1>
            <p className="lead">{homeHero.lead}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to={homeHero.primary.to}>
                {homeHero.primary.label}
              </Link>
              <Link className="btn-text" to={homeHero.secondary.to}>
                {homeHero.secondary.label}
              </Link>
            </div>
          </div>
          <div className="hero-frame-slot">
            <ScaleIn>
              <VideoFrame
                hero
                eager
                src={homeHero.src}
                poster={homeHero.poster}
                alt={homeHero.alt}
                badge={homeHero.badge}
                caption={homeHero.caption}
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      <section className="section" id="value" aria-labelledby="value-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeValue.index}</p>
            <h2 id="value-title">{homeValue.title}</h2>
            <p className="lead">{homeValue.lead}</p>
          </ScrollReveal>
          <Stagger className="value-grid">
            {homeValue.items.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-title">
        <div className="container problem-layout">
          <div>
            <ScrollReveal className="section-head">
              <p className="kicker">{homeProblem.index}</p>
              <h2 id="problem-title">{homeProblem.title}</h2>
              <p className="lead">{homeProblem.lead}</p>
            </ScrollReveal>
            <Stagger className="stack-cards">
              {homeProblem.items.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </Stagger>
          </div>
          <SlideIn from="right">
            <VideoFrame
              src={homeProblem.src}
              poster={homeProblem.poster}
              alt={homeProblem.alt}
              badge={homeProblem.badge}
              caption={homeProblem.caption}
            />
          </SlideIn>
        </div>
      </section>

      <section className="section" aria-labelledby="solution-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeSolution.index}</p>
            <h2 id="solution-title">{homeSolution.title}</h2>
            <p className="lead">{homeSolution.lead}</p>
          </ScrollReveal>
          <div className="flow" ref={flowRef}>
            <span className="flow-line" aria-hidden="true">
              <span />
            </span>
            <ol>
              {homeSolution.steps.map((step, index) => (
                <li className="flow-step" key={step.title}>
                  <ScrollReveal delay={Math.min(index, 3) * 0.12}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="feature-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeFeatures.index}</p>
            <h2 id="feature-title">{homeFeatures.title}</h2>
            <p className="lead">{homeFeatures.lead}</p>
          </ScrollReveal>
          <div className="feature-layout">
            <div>
              {homeFeatures.items.map((item) => (
                <article className="feature-block anchor" id={item.id} key={item.id}>
                  <h3>
                    <button
                      type="button"
                      className={`feature-tab${active === item.id ? " is-active" : ""}`}
                      aria-pressed={active === item.id}
                      onClick={() => select(item.id)}
                    >
                      {item.title}
                    </button>
                  </h3>
                  <p className="lead">{item.text}</p>
                  <div className="feature-still-mobile">
                    <ScaleIn>
                      <VideoFrame
                        src={item.src}
                        poster={item.poster}
                        alt={item.alt}
                        badge={item.badge}
                        caption={item.caption}
                      />
                    </ScaleIn>
                  </div>
                </article>
              ))}
              <Link className="btn-text" to={homeFeatures.link.to}>
                {homeFeatures.link.label}
              </Link>
            </div>
            <div className="feature-visual-desktop">
              <ScaleIn key={activeFeature.id}>
                <VideoFrame
                  src={activeFeature.src}
                  poster={activeFeature.poster}
                  alt={activeFeature.alt}
                  badge={activeFeature.badge}
                  caption={activeFeature.caption}
                />
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="showcase-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeShowcase.index}</p>
            <h2 id="showcase-title">{homeShowcase.title}</h2>
            <p className="lead">{homeShowcase.lead}</p>
          </ScrollReveal>
          <div className="frame-grid">
            {homeShowcase.items.map((item) => (
              <ScaleIn key={item.filename}>
                <VideoFrame
                  src={item.src}
                  poster="/media/pending-bench.svg"
                  alt={item.alt}
                  badge="AI 生成"
                  filename={item.filename}
                  duration={item.duration}
                  caption=""
                />
              </ScaleIn>
            ))}
          </div>
          <p className="after-block">
            <Link className="btn-text" to={homeShowcase.link.to}>
              {homeShowcase.link.label}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="video-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeVideo.index}</p>
            <h2 id="video-title">{homeVideo.title}</h2>
            <p className="lead">{homeVideo.lead}</p>
          </ScrollReveal>
          {homeVideo.pairs.map((pair) => (
            <div className="compare" key={pair.before}>
              <SlideIn from="left">
                <VideoFrame
                  label="普通视频生成模型"
                  src={pair.before}
                  poster="/media/jump-diagram.svg"
                  alt="普通视频生成模型"
                  badge="普通生成"
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
                  badge="优化后"
                  filename="ue_reference.mp4"
                  duration="约 00:06"
                  caption=""
                />
              </SlideIn>
            </div>
          ))}
          <Stagger className="point-list">
            {homeVideo.points.map((point) => (
              <p className="point" key={point}>
                {point}
              </p>
            ))}
          </Stagger>
          <p className="after-block">
            <Link className="btn-text" to={homeVideo.link.to}>
              {homeVideo.link.label}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="workflow-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeWorkflow.index}</p>
            <h2 id="workflow-title">{homeWorkflow.title}</h2>
            <p className="lead">{homeWorkflow.lead}</p>
          </ScrollReveal>
          <Stagger className="steps">
            {homeWorkflow.steps.map((step) => (
              <article className="card" key={step.no}>
                <p className="step-no">{step.no}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </Stagger>
          <p className="after-block">
            <Link className="btn btn-primary mobile-full" to="/contact">
              获取小批样本
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="usecase-title">
        <div className="container">
          <div className="use-copy">
            <ScrollReveal className="section-head">
              <p className="kicker">{homeUseCases.index}</p>
              <h2 id="usecase-title">{homeUseCases.title}</h2>
              <p className="lead">{homeUseCases.lead}</p>
            </ScrollReveal>
            <ul className="tags">
              {homeUseCases.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="lead">{homeUseCases.note}</p>
          </div>
          <div className="frame-grid">
            {homeUseCases.items.map((item) => (
              <ScaleIn key={item.filename}>
                <VideoFrame
                  src={item.src}
                  poster="/media/pending-bench.svg"
                  alt={item.alt}
                  badge="内部真机"
                  filename={item.filename}
                  duration={item.duration}
                  caption="可行性初步验证。"
                />
              </ScaleIn>
            ))}
          </div>
          <p className="after-block">
            <Link className="btn-text" to={homeUseCases.link.to}>
              {homeUseCases.link.label}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="advantage-title">
        <div className="container">
          <ScrollReveal className="section-head">
            <p className="kicker">{homeAdvantages.index}</p>
            <h2 id="advantage-title">{homeAdvantages.title}</h2>
            <p className="lead">{homeAdvantages.lead}</p>
          </ScrollReveal>
          <Stagger className="value-grid">
            {homeAdvantages.items.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </Stagger>
          <p className="after-block">
            <Link className="btn-text" to={homeAdvantages.link.to}>
              {homeAdvantages.link.label}
            </Link>
          </p>
        </div>
      </section>

      <section className="section final-cta" aria-labelledby="final-title">
        <div className="container">
          <div className="record-sheet">
            <ScrollReveal className="section-head">
              <p className="kicker">{homeFinal.kicker}</p>
              <h2 id="final-title">{homeFinal.title}</h2>
              <p className="lead">{homeFinal.lead}</p>
            </ScrollReveal>
            <ul className="mode-list">
              {homeFinal.modes.map((mode) => (
                <li key={mode.id}>
                  <h3>
                    <Link to={`/pricing#${mode.id}`}>{mode.title}</Link>
                  </h3>
                  <p>{mode.text}</p>
                </li>
              ))}
            </ul>
            <div className="actions">
              <Link className="btn btn-primary" to={homeFinal.primary.to}>
                {homeFinal.primary.label}
              </Link>
              <Link className="btn-text" to={homeFinal.secondary.to}>
                {homeFinal.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
