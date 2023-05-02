import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "@components/Modal";

export default function Header(): JSX.Element {
  const router = useRouter();
  const { pathname } = router;
  const view = ["/lobby", "/main", "/play"].includes(pathname);

  const [showModal, setShowModal] = useState([false]);

  const handleShowModal = (idx: number) => {
    console.log("모달 열기");
    setShowModal((state) => {
      const newState = [...state];
      newState[idx] = true;
      return newState;
    });
    console.log(showModal);
  };

  const handleCloseModal = (idx: number) => {
    console.log("모달 닫기");
    setShowModal((state) => {
      const newState = [...state];
      newState[idx] = false;
      return newState;
    });
  };

  return (
    <div>
      {view ? (
        <div className="w-full h-14 bg-[#D9D9D9] flex flex-row justify-between z-30">
          <Link href="/">
            <div
              className=" w-20 h-full bg-contain bg-no-repeat bg-center cursor-pointer ml-10"
              style={{ backgroundImage: "url(/main/logo.png)" }}
            />
          </Link>
          {/**/}

          <div>
            <button
              onClick={() => handleShowModal(0)}
              className="w-20 h-full bg-contain bg-no-repeat bg-center cursor-pointer mr-10
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
              style={{ backgroundImage: "url(/main/mypage.png)" }}
            />
            <Modal show={showModal[0]} handleClose={() => handleCloseModal(0)}>
              <p className="text-black  text-[3rem] ">
                안에 들어갈 데이터(유저 마이페이지)
              </p>
            </Modal>
          </div>
        </div>
      ) : (
        <div className="w-full h-14 bg-[#D9D9D9] flex flex-row justify-center items-center">
          <a href="/SRS.pdf" download>
            SRS문서 다운로드하기
          </a>
        </div>
      )}
    </div>
  );
}
