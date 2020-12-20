import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import React from "react";

const code = `
() => {
    const [phrase, setPhrase] = React.useState("Hey! 👋");

    const phrases = React.useMemo(() => [
        "Thank you for visiting my site!",
        "I am based out of Boulder, CO!",
        "I am a Software Engineer and composer!",
        "I love climbing rocks!"
    ], []);

    React.useEffect(() => {
        setInterval(() => {
            setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
        }, 4000);
    }, [phrases]);


    return (
        <div className="text-2xl mt-24 pr-24">
            {phrase}
        </div>
    );
}
`;

const Editor = () => {
  return (
    <LiveProvider code={code}>
      <div className="flex flex-wrap">
        <LivePreview className="md:w-1/2 xs:w-40 h-60" />
        <LiveEditor className="md:w-1/2 xs:w-40 md:mt-36 shadow-2xl rounded-md border-2 border-gray-500" />
      </div>
    </LiveProvider>
  );
};

export default Editor;
