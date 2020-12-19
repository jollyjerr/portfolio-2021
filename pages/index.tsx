import Editor from "../components/Editor";
import Footer from "../components/Footer";
import React from "react";
import { ScrollTo } from "react-scroll-to";
import Toolbar from "../components/Toolbar";

const Home = () => {
  return (
    <div className="container mx-auto px-2 relative pt-6 pb-6 ">
      <section className="min-h-screen bg-gray-50 p-6 rounded-md">
        <Toolbar />
        <div className="text-5xl">
          <h1 className="font-title">Jeremiah Tabb</h1>
        </div>
        <div className="mt-28">
          <h2 className="text-4xl">Hello!</h2>
        </div>
        <Editor />
      </section>
      <section className="min-h-screen bg-gray-300 mt-12 mb-12 p-6 rounded-md">
        <div className="text-5xl text-gray-50">
          <h1 className="font-title">About me</h1>
        </div>
      </section>
      <section className="min-h-screen bg-gray-700 mt-12 mb-12 p-6 rounded-md">
        <div className="text-5xl text-gray-50">
          <h1 className="font-title">My work</h1>
        </div>
      </section>
      <section className="min-h-screen bg-blue-500 mt-12 mb-12 p-6 rounded-md">
        <div className="text-5xl text-gray-50">
          <h1 className="font-title">My music</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
