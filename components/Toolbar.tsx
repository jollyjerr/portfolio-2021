import React from "react";
import { ScrollTo } from "react-scroll-to/dist";

type Props = {
  about?: React.MutableRefObject<undefined>;
  code?: React.MutableRefObject<undefined>;
  music?: React.MutableRefObject<undefined>;
  contact?: React.MutableRefObject<undefined>;
};

const Toolbar = ({ about, code, music, contact }: Props) => {
  return (
    <nav className="md:absolute md:top-0 md:right-0 md:h-16 md:w-36 md:p-10">
      <div className="flex justify-evenly flex-wrap">
        <button
          //   onClick={() => scroll({ ref: about, smooth: true })}
          className="md:block text-lg text-gray-500"
        >
          About
        </button>
        <button className="md:block text-lg text-gray-500">Code</button>
        <button className="md:block text-lg text-gray-500">Contact</button>
      </div>
    </nav>
  );
};

export default Toolbar;
