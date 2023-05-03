import type { NextPage } from "next";
import React, { useState } from "react";
import Modal from "@components/Modal";

const Main: NextPage = () => {
  const [showModal, setShowModal] = useState([false, false, false]);

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
    <div className="flex justify-center bg-antiquewhite">
      <div className="relative bg-antiquewhite fSize:w-[118rem] w-full h-[250rem] overflow-hidden text-center text-[2rem] text-black font-buenard">
        <div className="absolute top-[6.25rem] left-[15rem] w-[90rem] h-[70.02rem]">
          <img
            className="absolute top-[0rem] left-[0rem] w-[90rem] h-[70.02rem] object-cover"
            alt=""
            src="/lobby/bg.png"
          />
          <div className="absolute top-[20.19rem] left-[32.5rem]">
            <p className="m-0">The 17th Century:</p>
            <p className="m-0">Not an Easy Time for Farming</p>
          </div>
        </div>
        {/*  버튼 들*/}
        <div className="absolute top-[36.13rem] left-[41.25rem] w-[37.5rem] h-[26.63rem] text-[3rem] text-white">
          {/*  TODO login*/}
          <div>
            <button
              onClick={() => handleShowModal(0)}
              className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_8px_#000] w-[37.5rem] h-[6.38rem]
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
            <Modal show={showModal[0]} handleClose={() => handleCloseModal(0)}>
              <div>
                <div className="p-10 flex flex-col justify-start items-center gap-10">
                  <img
                    className="w-[600px] h-[500px]"
                    alt=""
                    src="/main/login.png"
                  />
                  <div className="w-[600px] h-[300px] bg-[#E4D8C6] ">
                    <p className="p-10 text-13xl text-black text-start m-0">
                      Login 버튼을 클릭 시, 해당 화면이 팝업되며 카카오 소셜
                      로그인을 진행할 수 있음.
                    </p>
                  </div>
                </div>
                {/*TODO 요구명세서*/}
                <div className="h-[calc(100vh-900px)] bg-white mt-10 text-45xl text-black">
                  <div className="w-full h-full bg-amber-200">요구명세서</div>
                </div>
              </div>
            </Modal>
          </div>
          <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_8px_#000] w-[37.5rem] h-[6.38rem]">
            <div className="relative bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[37.63rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
            <b className="absolute top-[0rem] left-[0.06rem] flex items-center justify-center w-[37.44rem] h-[6.38rem]">
              Login
            </b>
          </div>
          {/*  TODO game rule*/}
          <div>
            <button
              onClick={() => handleShowModal(1)}
              className="absolute top-[10.13rem] left-[0rem] shadow-[0px_0px_8px_#000] w-[37.5rem] h-[6.38rem]
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
            <Modal show={showModal[1]} handleClose={() => handleCloseModal(1)}>
              <div className="p-10 flex flex-col justify-start items-center gap-10">
                <a href="/rule.pdf" download>
                  <img
                    className="w-[600px] h-[500px]"
                    alt=""
                    src="/main/down.png"
                  />
                </a>
                <div className="w-[600px] h-[300px] bg-[#E4D8C6] ">
                  <p className="p-10 text-13xl text-black text-start m-0">
                    Game Rule 버튼을 클릭 시, 위 파일을 다운로드 하게되며 해당
                    PDF 파일을 통하여 게임의 전반적 룰을 확인할 수 있음.
                  </p>
                </div>
              </div>
            </Modal>
          </div>
          <div className="absolute top-[10.13rem] left-[0rem] shadow-[0px_0px_8px_#000] w-[37.5rem] h-[6.38rem]">
            <div className="relative bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[37.63rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
            <b className="absolute top-[0rem] left-[0.06rem] flex items-center justify-center w-[37.44rem] h-[6.38rem] ">
              Game Rule
            </b>
          </div>
          {/*  TODO play*/}
          <div>
            <button
              onClick={() => handleShowModal(2)}
              className="absolute top-[20.25rem] left-[0rem] shadow-[0px_0px_8px_#000] w-[37.5rem] h-[6.38rem]
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
            <Modal show={showModal[2]} handleClose={() => handleCloseModal(2)}>
              <div className="p-10 flex flex-col justify-start items-center gap-10">
                <img
                  className="w-[600px] h-[500px]"
                  alt=""
                  src="/main/lobby.png"
                />
                <div className="w-[600px] h-[300px] bg-[#E4D8C6] ">
                  <p className="p-10 text-13xl text-black text-start m-0">
                    Play 버튼을 클릭 시, 위 사진과 같이 게임 로비 화면으로
                    전환됨.
                  </p>
                </div>
              </div>
            </Modal>
          </div>
          <div className="absolute top-[20.25rem] left-[0rem] shadow-[0px_0px_8px_#000] w-[37.5rem] h-[6.38rem]">
            <div className="relative bg-saddlebrown shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[37.63rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
            <b className="absolute top-[0rem] left-[0.06rem] flex items-center justify-center w-[37.44rem] h-[6.38rem]">
              Play
            </b>
          </div>
        </div>
        <div className="absolute top-[62.75rem] left-[93.13rem] w-[6.25rem] h-[6.25rem] overflow-hidden" />
      </div>
    </div>
  );
};

export default Main;

//[상대 농장/카드, 상대 재료, main map, 내 농장, 내 재료, 내 카드, 채팅)
