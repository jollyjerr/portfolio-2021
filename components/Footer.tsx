import { GitHub, Linkedin, Mail, Twitter } from "react-feather";

import React from "react";

const Footer = () => {
  return (
    <section className="h-20 bg-gray-50 mt-12 mb-12 p-4 rounded-md">
      <div className="flex justify-evenly">
        <a href="https://github.com/jollyjerr" target="blank">
          <GitHub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/jeremiahtabb/" target="blank">
          <Linkedin size={50} />
        </a>
        <a href="https://twitter.com/JerrTabb" target="blank">
          <Twitter size={50} />
        </a>
        <a href="mailto:tabbjeremiah@gmail.com">
          <Mail size={50} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
