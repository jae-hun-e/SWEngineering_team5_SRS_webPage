import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#e4d9c6] flex justify-center items-center flex-col">
      <p className="text-11xl">소프트웨어 공학 Team5 SRS</p>
      <div className="flex flex-col justify-center items-center">
        <p>UI 살펴보기</p>
        <div className="flex justify-center items-center gap-3 text-11xl text-blue-100">
          <Link
            href={"/main"}
            className="no-underline bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[6.63rem] h-[2.38rem] border-[1px] border-solid border-gray-600"
          >
            <b className="flex items-center justify-center w-[6.44rem] h-[2.38rem]">
              Main
            </b>
          </Link>
          <Link
            href={"/lobby"}
            className="no-underline bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[6.63rem] h-[2.38rem] border-[1px] border-solid border-gray-600"
          >
            <b className="flex items-center justify-center w-[6.44rem] h-[2.38rem]">
              Lobby
            </b>
          </Link>
          <Link
            href={"/play"}
            className="no-underline bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[6.63rem] h-[2.38rem] border-[1px] border-solid border-gray-600"
          >
            <b className="flex items-center justify-center w-[6.44rem] h-[2.38rem]">
              Play
            </b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
