import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
