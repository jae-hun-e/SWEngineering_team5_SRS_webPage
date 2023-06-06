import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Next(): JSX.Element {
  const router = useRouter();
  const {pathname}: {pathname: string} = router;

  if (pathname === "/") return <></>;
  const next = () => {
    if (pathname === "/main") {
      router.push("/lobby");
    } else if (pathname === "/lobby") {
      router.push("/play");
    } else if (pathname === "/play") {
      router.push("/");
    }
  };

  return (
    <div className="fixed right-0 w-[5vw] h-[100vh] flex justify-between items-center z-10">
      {/*  왼쪽이동*/}
      <div className="absolute top-[50vh] right-10 text-45xl font-bold" onClick={next}>
        <p className="hover:text-red-600 hover:opacity-30 cursor-pointer">→</p>
      </div>
    </div>
  );
}
