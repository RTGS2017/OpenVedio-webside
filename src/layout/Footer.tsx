import { Link } from "react-router";
import { footerLine, navItems, sampleCta, siteName } from "../content/site";
import "./footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{siteName}</p>
          <p className="footer-line">{footerLine}</p>
        </div>
        <nav className="footer-nav" aria-label="页脚">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
          <Link to={sampleCta.to}>{sampleCta.label}</Link>
        </nav>
      </div>
    </footer>
  );
}
