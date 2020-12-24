import Link from "next/link";
import React from "react";

type Props = {
  about?: React.MutableRefObject<HTMLElement>;
  code?: React.MutableRefObject<HTMLElement>;
  contact?: React.MutableRefObject<HTMLElement>;
};

const Toolbar = ({ about, code, contact }: Props) => {
  return (
    <nav className="md:absolute md:top-0 md:right-0 md:h-16 md:w-36 md:p-10 text-center md:text-left">
      <div className="">
        <div>
          <button
            onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}
            className="md:block text-lg text-gray mx-2 md:mx-0"
          >
            About
          </button>
          <button
            className="md:block text-lg text-gray mx-2 md:mx-0"
            onClick={() => code.current.scrollIntoView({ behavior: "smooth" })}
          >
            Code
          </button>
          <button
            className="md:block text-lg text-gray mx-2 md:mx-0"
            onClick={() =>
              contact.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </button>
          {/* <Link href="/music">
              <button className="md:block text-lg text-gray">Music</button>
            </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
