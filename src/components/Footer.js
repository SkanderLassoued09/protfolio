import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="myName">
        <h4>
          Skander Lassoued <span>Protfolio</span>
        </h4>
      </div>
      <div className="quote">
        <p>
          “Develop success from failures. Discouragement and failure are two of
          the surest stepping stones to success.”
        </p>
      </div>
      <div className="release"> © Developed in 2022</div>
    </div>
  );
}
