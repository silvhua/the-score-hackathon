import React from "react";
import "./Placeholder.scss";

const Placeholder = ({text}) => {
  const placeholderText = text || "Loading";
  return (
    <section className="placeholder">
      <p>{placeholderText}</p>
    </section>
  );
};

export default Placeholder;
