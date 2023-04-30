import React from "react";
import Header from "@components/Header";
import Prev from "@components/Prev";
import Next from "@components/Next";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="w-full bg-white sm:w-fScreen">
        <Header />
        <Prev />
        <Next />
        <div className="w-full h-[100vh]">{children}</div>
      </div>
    </div>
  );
}
