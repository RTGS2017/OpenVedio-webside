import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { PageIntro } from "../components/PageIntro";
import { Seo } from "../components/Seo";
import { contactFields, contactIntro, contactResult } from "../content/contact";
import { contactSeo } from "../content/seo";
import "./contact.css";

type Choice = "" | "yes" | "no";

type FormState = {
  task: string;
  scene: string;
  view: string;
  exclusive: Choice;
  sample: Choice;
  reply: string;
};

const emptyForm: FormState = {
  task: "",
  scene: "",
  view: "",
  exclusive: "",
  sample: "",
  reply: "",
};

function choiceLabel(value: Choice, yes: string, no: string) {
  if (value === "yes") return yes;
  if (value === "no") return no;
  return "未选择";
}

function filled(value: string) {
  const text = value.trim();
  return text.length > 0 ? text : "未填写";
}

function buildCopy(form: FormState) {
  return [
    "琉音科技小批样本需求",
    `任务：${filled(form.task)}`,
    `场景：${filled(form.scene)}`,
    `视角：${filled(form.view)}`,
    `是否要求约定范围内独占：${choiceLabel(form.exclusive, "是", "否")}`,
    `是否先要小批样本：${choiceLabel(form.sample, "是", "否")}`,
    `如何回复：${filled(form.reply)}`,
    "",
    "说明：网站接收地址尚未接入。此文本只在浏览器里生成，并未发送。",
  ].join("\n");
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [copyText, setCopyText] = useState("");
  const [copyState, setCopyState] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCopyText(buildCopy(form));
    setCopyState("");
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopyState(contactResult.copied);
    } catch {
      setCopyState(contactResult.failed);
    }
  };

  return (
    <>
      <Seo entry={contactSeo} />
      <PageIntro kicker={contactIntro.kicker} title={contactSeo.h1} lead={contactIntro.lead} />
      <section className="section section-follow" aria-labelledby="form-title">
        <div className="container contact-layout">
          <h2 id="form-title" className="sr-only">
            样本需求
          </h2>
          <div className="callout">
            <p>{contactIntro.missing}</p>
          </div>
          <p className="hint">{contactIntro.beforeSubmit}</p>
          <form className="form" onSubmit={onSubmit} autoComplete="off">
            <label className="field">
              <span className="field-label">{contactFields.task}</span>
              <input
                name="task"
                value={form.task}
                onChange={(event) => setForm({ ...form, task: event.target.value })}
              />
            </label>
            <label className="field">
              <span className="field-label">{contactFields.scene}</span>
              <input
                name="scene"
                value={form.scene}
                onChange={(event) => setForm({ ...form, scene: event.target.value })}
              />
            </label>
            <label className="field">
              <span className="field-label">{contactFields.view}</span>
              <input
                name="view"
                value={form.view}
                onChange={(event) => setForm({ ...form, view: event.target.value })}
              />
            </label>
            <fieldset className="field">
              <legend className="field-label">{contactFields.exclusive}</legend>
              <div className="choices">
                <label>
                  <input
                    type="radio"
                    name="exclusive"
                    checked={form.exclusive === "yes"}
                    onChange={() => setForm({ ...form, exclusive: "yes" })}
                  />
                  {contactFields.yesExclusive}
                </label>
                <label>
                  <input
                    type="radio"
                    name="exclusive"
                    checked={form.exclusive === "no"}
                    onChange={() => setForm({ ...form, exclusive: "no" })}
                  />
                  {contactFields.noExclusive}
                </label>
              </div>
            </fieldset>
            <fieldset className="field">
              <legend className="field-label">{contactFields.sample}</legend>
              <div className="choices">
                <label>
                  <input
                    type="radio"
                    name="sample"
                    checked={form.sample === "yes"}
                    onChange={() => setForm({ ...form, sample: "yes" })}
                  />
                  {contactFields.yesSample}
                </label>
                <label>
                  <input
                    type="radio"
                    name="sample"
                    checked={form.sample === "no"}
                    onChange={() => setForm({ ...form, sample: "no" })}
                  />
                  {contactFields.noSample}
                </label>
              </div>
            </fieldset>
            <label className="field">
              <span className="field-label">{contactFields.reply}</span>
              <textarea
                name="reply"
                value={form.reply}
                onChange={(event) => setForm({ ...form, reply: event.target.value })}
              />
              <span className="hint">{contactFields.replyHint}</span>
            </label>
            <button className="btn btn-primary" type="submit">
              {contactFields.submit}
            </button>
          </form>
          {copyText ? (
            <div className="result" aria-live="polite">
              <h2>{contactResult.title}</h2>
              <p>{contactResult.body}</p>
              <pre className="copy-block">{copyText}</pre>
              <button className="btn btn-primary" type="button" onClick={onCopy}>
                {contactResult.copy}
              </button>
              {copyState ? <p>{copyState}</p> : null}
            </div>
          ) : null}
          <p>
            <Link className="btn-text" to="/deliverables">
              {contactFields.back}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
