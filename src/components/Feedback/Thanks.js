import React from "react";
import Footer from "../Footer";
import Navbar from "../navbar/navbar";
import "./Feedback.css";
const Thanks = () => {
  return (
    <div>
      <Navbar />
      <div className="box">
        <h1>Thank You for Your Feedback!</h1>
        <p>
          We appreciate your valuable feedback (^・ω・^ ) . Your feedback helps
          us improve our services!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Thanks;
