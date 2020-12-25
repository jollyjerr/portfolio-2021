import React from "react";

const blue = "#799bef";

const Timeline = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray h-full border invisible md:visible"
          style={{ left: "50%" }}
        ></div>
        <div className="mb-8 md:flex justify-between items-center w-full">
          <div className="order-1 w-5/12 "></div>
          <div className="z-20 flex items-center order-1 bg-gray shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
          </div>
          <div className="order-1 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4">
            <h3 className="mb-3 font-bold text-xl">
              Principal Software Engineer at Sose IntelWorks{" "}
            </h3>
            <div className="text-sm leading-snug tracking-wide text-opacity-100">
              <p className="text-gray">December 2019 - Current</p>
              <p>
                I work with a team of engineers on full-stack data management,
                data visualization, data reporting, and predictive analytic
                applications in a variety of domains. We work on natural
                language processing for medical and financial data and build
                involved web applications for financial institutions and
                eCommerce businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 md:flex justify-between flex-row-reverse items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4">
            <h3 className="mb-3 font-bold text-xl">
              Software Engineer at Strabo Partners{" "}
            </h3>
            <div className="text-sm leading-snug tracking-wide text-opacity-100">
              <p className="text-gray">December 2019 - Current</p>
              <p>
                I originally worked with Strabo Partners as a C#/x++ developer
                developing large plugins and custom modifications for Microsoft
                Dynamics customers. Now, I work as their lead engineer for
                anything running on Linux, primarily involving their nuxtjs
                website and supporting nodejs infrastructure running on digital
                ocean.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 md:flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
          </div>
          <div className="order-1 rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4">
            <h3 className="mb-3 font-bold text-xl">
              Code For Boulder Project Manager{" "}
            </h3>
            <div className="text-sm leading-snug tracking-wide text-opacity-100">
              <p className="text-gray">April 2020 - Current</p>
              <p>
                UpSwyng is a mobile-ready, digital directory of resources to
                assist the unhoused and at-risk communities. I contribute to
                this open source project and manage the project as a whole.
                Check it out on{" "}
                <a
                  className="underline"
                  target="blank"
                  href="https://github.com/CodeForBoulder/upswyng"
                >
                  GitHub
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
