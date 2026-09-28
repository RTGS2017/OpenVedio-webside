import "./page-blocks.css";

type PageIntroProps = {
  kicker: string;
  title: string;
  lead: string;
};

export function PageIntro({ kicker, title, lead }: PageIntroProps) {
  return (
    <header className="page-intro section">
      <div className="container">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </header>
  );
}
