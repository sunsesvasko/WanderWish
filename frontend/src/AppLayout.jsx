import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
