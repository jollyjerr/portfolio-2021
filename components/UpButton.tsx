import { ArrowUp } from "react-feather";
import React from "react";

const UpButton = ({ home }: { home: React.MutableRefObject<HTMLElement> }) => (
  <button
    className="fixed left-0"
    onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
  >
    <ArrowUp />
  </button>
);

export default UpButton;
