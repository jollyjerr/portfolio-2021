import DynamicEditor from "../components/DynamicEditor";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import Head from "next/head";
import React from "react";
import Timeline from "../components/Timeline";
import Toolbar from "../components/Toolbar";
import UpButton from "../components/UpButton";

const Home = () => {
  const home = React.useRef(null);
  const about = React.useRef(null);
  const code = React.useRef(null);
  const contact = React.useRef(null);

  return (
    <div
      className="container mx-auto px-2 relative pt-6 pb-6 text-black"
      ref={home}
    >
      <Head>
        <title>Jeremiah Tabb</title>
        <meta name="description" content="Software Engineer | Composer | 🌱" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toolbar about={about} code={code} contact={contact} />
      <section className="min-h-screen p-6 rounded-md">
        <div className="text-8xl">
          <h1 className="font-title lg:text-left text-center text-title">
            Jeremiah Tabb
          </h1>
        </div>
        <DynamicEditor />
      </section>
      <Fade
        left
        innerRef={(arg: React.MutableRefObject<any>) => (about.current = arg)}
      >
        <section className="min-h-screen mt-12 mb-12 p-6 rounded-md">
          <div className="text-gray-50">
            <h1 className="text-8xl font-title text-title">About Me</h1>
            <div className="flex flex-row flex-wrap">
              <div className="mt-12 lg:w-1/2 md:w-auto">
                <p className="mb-8">
                  I am a software engineer who is passionate about using
                  technology to better the world. I leverage the power of data
                  and task automation to deliver full solutions to business
                  problems and societal needs.
                </p>
                <p className="mb-8">
                  I love turning complicated ideas into slick, functional,
                  applications. No project is too outlandish if you first break
                  the issue into a series of bite size questions, and then,
                  using the right tool for each job, work iteratively to solve
                  them.
                </p>
                <p className="mb-8">
                  In my free time I work on open source projects, climb lots of
                  rocks, and compose music.
                </p>
              </div>
              <div className="lg:pl-20 lg:pt-40 lg:w-1/2 md:w-auto">
                <img
                  src="/photo.png"
                  alt="A great picture of me!"
                  className="shadow-md"
                />
              </div>
            </div>
          </div>
          <UpButton home={home} />
        </section>
      </Fade>
      <Fade
        left
        innerRef={(arg: React.MutableRefObject<any>) => (code.current = arg)}
      >
        <section className="min-h-screen mt-12 mb-12 p-6 rounded-md">
          <div className="text-8xl text-gray-50 mb-8">
            <h1 className="font-title text-title">My Work</h1>
          </div>
          <Timeline />
          <UpButton home={home} />
        </section>
      </Fade>
      <Fade
        right
        innerRef={(arg: React.MutableRefObject<any>) => (contact.current = arg)}
      >
        <Footer />
      </Fade>
    </div>
  );
};

export default Home;
