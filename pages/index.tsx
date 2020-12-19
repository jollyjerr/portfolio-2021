import Editor from "../components/Editor";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";
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
        <div className="text-gray-50">
          <h1 className="text-5xl font-title">About me</h1>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/2">
              Af keytar neutra sustainable flannel raw denim freegan skateboard
              chartreuse everyday carry tumblr butcher cray. Semiotics tote bag
              ugh irony hexagon mixtape mumblecore flannel leggings shaman pork
              belly live-edge asymmetrical unicorn blue bottle. Kombucha small
              batch poke salvia iceland. Flannel letterpress gluten-free blog 3
              wolf moon celiac yuccie shaman etsy. Butcher photo booth hot
              chicken bushwick, thundercats synth cliche twee squid try-hard
              deep v adaptogen PBR&B cloud bread. Beard viral knausgaard
              post-ironic yr before they sold out hashtag. Intelligentsia
              hashtag bespoke pop-up blog poutine trust fund unicorn man bun
              YOLO dreamcatcher meditation you probably haven't heard of them
              brooklyn. Brooklyn leggings XOXO microdosing, dreamcatcher
              humblebrag everyday carry PBR&B. Organic twee wolf umami venmo
              fanny pack.
            </div>
            <Image
              src="/photo.jpg"
              alt="A great picture of me"
              width={500}
              height={500}
            />
          </div>
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
