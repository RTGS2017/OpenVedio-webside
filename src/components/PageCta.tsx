import { Link } from "react-router";

type LinkItem = { to: string; label: string };

type PageCtaProps = {
  note?: string;
  primary: LinkItem;
  secondary?: LinkItem;
  extra?: LinkItem;
};

export function PageCta({ note, primary, secondary, extra }: PageCtaProps) {
  return (
    <section className="section page-cta">
      <div className="container page-cta-box">
        {note ? <p className="lead">{note}</p> : null}
        <div className="actions stack-actions">
          <Link className="btn btn-primary" to={primary.to}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="btn-text" to={secondary.to}>
              {secondary.label}
            </Link>
          ) : null}
          {extra ? (
            <Link className="btn-text" to={extra.to}>
              {extra.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
