import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

function AppLayout() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
