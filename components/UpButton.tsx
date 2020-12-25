import { ArrowUp } from "react-feather";
import React from "react";

const UpButton = ({ home }: { home: React.MutableRefObject<HTMLElement> }) => (
  <button
    className="absolute left-0 bottom-0"
    onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
  >
    <ArrowUp />
  </button>
);

export default UpButton;
