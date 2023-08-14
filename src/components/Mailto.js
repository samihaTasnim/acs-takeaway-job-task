import React from "react";
import { Link } from "react-router-dom";

const Mailto = ({ mailto, label }) => {
  return (
    <Link
      to='#'
      className="underline"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default Mailto;