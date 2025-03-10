import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
