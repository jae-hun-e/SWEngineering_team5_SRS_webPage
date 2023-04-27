import React from "react";

export default function Lobby(): JSX.Element {
  return (
    <div className="w-full h-[100vh] bg-[#e4d9c6] flex justify-center items-center flex-col">
      <div
        className="w-full h-full bg-contain bg-no-repeat bg-center cursor-pointer ml-10"
        style={{ backgroundImage: "url(/lobby/bg.png)" }}
      />
    </div>
  );
}
