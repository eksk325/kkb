import React from "react";
import piggy from "../images/shinypiggy.png";

function InfoCard() {
  return (
    <div>
      <div
        style={{
          fontSize: "18px",
          width: "60%",
          margin: "auto",
          paddingBottom: "20px",
        }}
      >
        You're largest spending in January was...
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "600",
        }}
      >
        $500.35
      </div>
    </div>
  );
}

export default InfoCard;
