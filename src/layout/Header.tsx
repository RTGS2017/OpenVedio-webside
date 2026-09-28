import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navItems, sampleCta, siteName } from "../content/site";
import { useHeaderScroll } from "../motion";
import "./header.css";

export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  useHeaderScroll();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link className="logo" to="/">
          {siteName}
        </Link>
        <nav className="desktop-nav" aria-label="页面">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-tools">
          <Link
            className="btn btn-primary header-cta"
            to={sampleCta.to}
            aria-current={pathname === sampleCta.to ? "page" : undefined}
          >
            {sampleCta.label}
          </Link>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "关闭菜单" : "打开菜单"}</span>
            <span className="burger" />
          </button>
        </div>
      </div>
      <div
        className={`nav-backdrop${open ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={() => {
          setOpen(false);
          toggleRef.current?.focus();
        }}
      />
      <nav
        id="site-menu"
        ref={drawerRef}
        className={`nav-drawer${open ? " is-open" : ""}`}
        aria-label="菜单"
        aria-hidden={open ? undefined : true}
        inert={!open}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
