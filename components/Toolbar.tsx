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
    <nav className="absolute top-0 right-0 h-16 w-166 p-10">
      <div>
        <button
          //   onClick={() => scroll({ ref: about, smooth: true })}
          className="block text-lg text-gray-500"
        >
          About
        </button>
        <button className="block text-lg text-gray-500">Code</button>
        <button className="block text-lg text-gray-500">Music</button>
        <button className="block text-lg text-gray-500">Contact</button>
      </div>
    </nav>
  );
};

export default Toolbar;
