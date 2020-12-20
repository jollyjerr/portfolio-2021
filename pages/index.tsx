import Editor from "../components/Editor";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";
import Toolbar from "../components/Toolbar";

const Home = () => {
  return (
    <div className="container mx-auto px-2 relative pt-6 pb-6 ">
      <Toolbar />
      <section className="min-h-screen bg-gray-50 p-6 rounded-md">
        <div className="text-5xl">
          <h1 className="font-title">Jeremiah Tabb</h1>
        </div>
        <Editor />
      </section>
      <Fade left>
        <section className="min-h-screen bg-gray-700 mt-12 mb-12 p-6 rounded-md">
          <div className="text-gray-50">
            <h1 className="text-5xl font-title">About me</h1>
            <div className="flex flex-row flex-wrap">
              <div className="w-1/2 mt-12">
                My name is Jeremiah and I am a person who does things and I like
                to do things and I really need to write the text that I am going
                to use in this section
              </div>
              <div className="w-1/2 pl-20 pt-40">
                <img src="/photo.png" alt="A great picture of me!" />
                {/* <Image
                  src="/photo.png"
                  alt="A great picture of me"
                  width={500}
                  height={500}
                /> */}
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <Fade left>
        <section className="min-h-screen bg-blue-500 mt-12 mb-12 p-6 rounded-md">
          <div className="text-5xl text-gray-50">
            <h1 className="font-title">My work</h1>
          </div>
        </section>
      </Fade>
      <Fade right>
        <Footer />
      </Fade>
    </div>
  );
};

export default Home;
