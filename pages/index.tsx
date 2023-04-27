import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#e4d9c6] flex justify-center items-center flex-col">
      <p>소프트웨어 공학 Team5 SRS</p>
      <div className="flex flex-col justify-center items-center">
        <p>UI</p>
        <div className="flex justify-center items-center">
          <Link href={"/lobby"}>lobby</Link>
          <Link href={"/main"}>main</Link>
          <Link href={"/play"}>play</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
