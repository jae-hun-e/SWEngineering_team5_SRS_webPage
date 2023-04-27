import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(): JSX.Element {
  const router = useRouter();
  const { pathname } = router;
  const view = ["/lobby", "/main", "/play"].includes(pathname);

  return (
    <div>
      {view ? (
        <div className="w-full h-14 bg-[#D9D9D9] flex flex-row justify-between">
          <div
            className=" w-20 h-full bg-contain bg-no-repeat bg-center cursor-pointer ml-10"
            style={{ backgroundImage: "url(/main/logo.png)" }}
          />
          <div
            className=" w-20 h-full bg-contain bg-no-repeat bg-center cursor-pointer mr-10"
            style={{ backgroundImage: "url(/main/mypage.png)" }}
          />
        </div>
      ) : (
        <div className="w-full h-14 bg-[#D9D9D9] flex flex-row justify-center items-center">
          <a href="/SRS.txt" download>
            SRS문서 다운로드하기
          </a>
        </div>
      )}
    </div>
  );
}
