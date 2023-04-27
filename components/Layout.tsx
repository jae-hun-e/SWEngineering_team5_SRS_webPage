import React from "react";
import Header from "@components/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="w-full bg-white sm:w-fScreen">
        <Header />
        <div className="w-full h-[100vh]">{children}</div>
      </div>
    </div>
  );
}
