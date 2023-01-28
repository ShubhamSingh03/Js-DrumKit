import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default PageLayout;
