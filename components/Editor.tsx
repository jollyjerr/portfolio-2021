import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

import React from "react";

const code = `
() => {
    const [phrase, setPhrase] = React.useState("Software Engineer");

    const phrases = [
        "asdjflsdkajflksdfsdf",
        "and more stuff",
        "Software Engineer"
    ]

    React.useEffect(() => {
        setInterval(() => {
            setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
        }, 2000);
    }, []);


    return (
        <div>
            {phrase}
        </div>
    )
}
`;

const Editor = () => {
  return (
    <LiveProvider code={code}>
      <div className="flex flex-row flex-wrap">
        <LivePreview className="w-1/2 text-xl mt-12 pr-24" />
        <LiveEditor className="w-1/2 mt-44 shadow-2xl rounded-md border-2 border-gray-500" />
      </div>
    </LiveProvider>
  );
};

export default Editor;
