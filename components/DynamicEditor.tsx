import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("./Editor"), { ssr: false });

export default function Editor() {
  return <DynamicEditor />;
}
