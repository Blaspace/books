import React from "react";
import SubHeader from "../component/SubHeader";
import Nav from "../component/Nav";
import Terms from "../component/Terms";
import Footer from "../component/Footer";

function TermsAndCondition() {
  return (
    <div>
      <Nav />
      <br />
      <SubHeader text={"Terms And Condition"} />
      <Terms />
      <Footer />
    </div>
  );
}

export default TermsAndCondition;
