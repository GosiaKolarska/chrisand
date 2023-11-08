import Header from "./header/Header";
import Footer from "./footer/Footer";
import VideoSection from "../common/video/VideoSection";
import CTA from "../common/CTA/CTA";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <VideoSection />
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
