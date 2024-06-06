import React from "react";
import Nav from "../component/Nav";
import SubHeader from "../component/SubHeader";
import About from "../component/About";
import Footer from "../component/Footer";

function AboutPage() {
  return (
    <div>
      <Nav />
      <br />
      <SubHeader text={"About Us"} />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
