import type { NextPage } from "next";
import Modal from "@components/Modal";
import { useState } from "react";

const Lobby: NextPage = () => {
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
      <div className=" relative bg-antiquewhite fSize:w-[250rem] w-full h-[125rem] overflow-hidden text-center text-[2rem] text-white font-buenard">
        <img
          className="absolute top-[6.25rem] left-[15rem] w-[90rem] h-[70.02rem] object-cover"
          alt=""
          src="/lobby/bg.png"
        />
        <div className="absolute top-[26.44rem] left-[47.5rem] text-black">
          <p className="m-0">The 17th Century:</p>
          <p className="m-0">Not an Easy Time for Farming</p>
        </div>
        <div className="absolute top-[37.13rem] left-[15rem] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(10px)] w-[57.5rem] h-[45rem] opacity-[0.9]">
          <div className="absolute top-[0rem] left-[0rem] bg-olivedrab [filter:blur(0px)] w-[57.5rem] h-[45rem]" />
        </div>
        <div className="absolute top-[37.75rem] left-[15.63rem] bg-gray-200 [filter:blur(4px)] w-[56.25rem] h-[43.75rem]" />
        <div className="absolute top-[37.13rem] left-[73.75rem] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(10px)] w-[31.25rem] h-[45rem] opacity-[0.9]">
          <div className="absolute top-[0rem] left-[0rem] bg-olivedrab [filter:blur(0px)] w-[31.25rem] h-[45rem]" />
        </div>
        {/*  TODO 대기열 디테일, 방생성칸*/}
        <div>
          <button
            onClick={() => handleShowModal(1)}
            className="absolute top-[37.75rem] left-[74.38rem]  w-[30rem] h-[43.75rem]
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
          />
          <Modal show={showModal[1]} handleClose={() => handleCloseModal(1)}>
            <p className="text-black">
              안에 들어갈 데이터(대기열 디테일, 방생성칸)
            </p>
          </Modal>
        </div>
        <div className="absolute top-[37.75rem] left-[74.38rem] [filter:blur(4px)] w-[30rem] h-[43.75rem] opacity-[0.9]">
          <div className="absolute top-[0rem] left-[0rem] bg-gray-200 [filter:blur(0px)] w-[30rem] h-[43.75rem]" />
        </div>

        {/*  TODO create game*/}
        <div>
          <button
            onClick={() => handleShowModal(2)}
            className="absolute top-[83.38rem] left-[45rem] shadow-[0px_0px_8px_#000] w-[25.5rem] h-[3.73rem]
                      border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
          />
          <Modal show={showModal[2]} handleClose={() => handleCloseModal(2)}>
            <p className="text-black">안에 들어갈 데이터(방생성칸)</p>
          </Modal>
        </div>
        <div
          className="absolute top-[83.38rem] left-[45rem] shadow-[0px_0px_8px_#000] w-[25rem] h-[3.13rem]
                      border-[4px] border-solid border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer"
        >
          <div className="relative bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[25.13rem] h-[3.19rem] border-[1px] border-solid border-gray-600"></div>
          <b className="absolute top-[0rem] left-[0.04rem] flex items-center justify-center w-[24.96rem] h-[3.13rem]">
            Create Game
          </b>
        </div>
        {/*<div className="absolute top-[83.38rem] left-[16.25rem] shadow-[0px_0px_8px_#000] w-[25rem] h-[3.13rem]">*/}
        {/*  <div className="relative bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[25.13rem] h-[3.19rem] border-[1px] border-solid border-gray-600"></div>*/}
        {/*  <b className="absolute top-[0rem] left-[0.04rem] flex items-center justify-center w-[24.96rem] h-[3.13rem]">*/}
        {/*    Join Game*/}
        {/*  </b>*/}
        {/*</div>*/}
        <div className="absolute top-[66.25rem] left-[76.88rem] shadow-[0px_0px_8px_#000] w-[25rem] h-[3.13rem]">
          <div className="relative bg-goldenrod-100 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[25.13rem] h-[3.19rem] border-[1px] border-solid border-gray-600"></div>
          <b className="absolute top-[0rem] left-[0.04rem] flex items-center justify-center w-[24.96rem] h-[3.13rem]">
            Let’s Play!
          </b>
        </div>
        <div className="absolute top-[38.38rem] left-[70rem] rounded-3xs bg-gray-200 w-[1.25rem] h-[42.5rem]" />
        <div className="absolute top-[73.75rem] left-[83.19rem] rounded-xl bg-gray-100 w-[1.75rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[39.06rem] left-[70.19rem] rounded-3xs bg-gray-200 w-[0.88rem] h-[6.25rem]" />
        <div className="absolute top-[73.63rem] left-[83.31rem] rounded-xl bg-white w-[1.5rem] h-[3.13rem] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        {/*  TODO 대기방 리스트*/}
        <button
          onClick={() => handleShowModal(0)}
          className="absolute top-[44.3rem] left-[16.6rem] w-[52.3rem] h-[6.9rem]
        border-[4px] border-solid border-red-500 hover:bg-amber-100 bg-transparent hover:opacity-30 cursor-pointer z-10"
        />
        <Modal show={showModal[0]} handleClose={() => handleCloseModal(0)}>
          <p className="text-black">안에 들어갈 데이터(대기방)</p>
        </Modal>

        <div className="absolute top-[44.63rem] left-[16.88rem] shadow-[0px_0px_8px_#000] w-[51.88rem] h-[6.25rem]">
          <div className="relative bg-saddlebrown  box-border w-[52rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
        </div>
        <div className="absolute top-[59.63rem] left-[16.88rem] shadow-[0px_0px_8px_#000] w-[51.88rem] h-[6.25rem]">
          <div className="relative bg-goldenrod-200 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[52rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
        </div>
        <div className="absolute top-[74.63rem] left-[16.88rem] shadow-[0px_0px_8px_#000] w-[51.88rem] h-[6.25rem]">
          <div className="relative bg-goldenrod-200 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[52rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
        </div>
        <div className="absolute top-[52.13rem] left-[16.88rem] shadow-[0px_0px_8px_#000] w-[51.88rem] h-[6.25rem]">
          <div className="relative bg-goldenrod-200 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[52rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
        </div>
        <div className="absolute top-[67.13rem] left-[16.88rem] shadow-[0px_0px_8px_#000] w-[51.88rem] h-[6.25rem]">
          <div className="relative bg-goldenrod-200 shadow-[6px_6px_4px_rgba(0,_0,_0,_0.25)] box-border w-[52rem] h-[6.38rem] border-[1px] border-solid border-gray-600"></div>
        </div>
        <b className="absolute top-[37.81rem] left-[54.63rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          Mode
        </b>
        <b className="absolute top-[45.25rem] left-[54.63rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          Public
        </b>
        <b className="absolute top-[37.81rem] left-[18.5rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          {" "}
          Player
        </b>
        <b className="absolute top-[45.25rem] left-[18.5rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          x 4
        </b>
        <b className="absolute top-[37.81rem] left-[31rem] flex items-center justify-center w-[23.63rem] h-[5rem]">
          Name
        </b>
        <b className="absolute top-[45.25rem] left-[31rem] flex items-center justify-center w-[23.63rem] h-[5rem]">
          Come Here!
        </b>
        <img
          className="absolute top-[38.19rem] left-[18.75rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <img
          className="absolute top-[45.69rem] left-[18.75rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <b className="absolute top-[52.75rem] left-[54.63rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          Private
        </b>
        <b className="absolute top-[52.75rem] left-[18.5rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          x 3
        </b>
        <b className="absolute top-[52.75rem] left-[31rem] flex items-center justify-center w-[23.63rem] h-[5rem]">
          Let’s Play!
        </b>
        <img
          className="absolute top-[53.19rem] left-[18.75rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <b className="absolute top-[60.25rem] left-[54.63rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          Public
        </b>
        <b className="absolute top-[60.25rem] left-[18.5rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          x 3
        </b>
        <b className="absolute top-[67.75rem] left-[31rem] flex items-center justify-center w-[23.63rem] h-[5rem]">
          Please Come here...
        </b>
        <img
          className="absolute top-[60.69rem] left-[18.75rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <b className="absolute top-[67.75rem] left-[54.63rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          Private
        </b>
        <b className="absolute top-[67.75rem] left-[18.5rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          x 2
        </b>
        <b className="absolute top-[60.25rem] left-[31rem] flex items-center justify-center w-[23.63rem] h-[5rem]">
          AGRICIDER
        </b>
        <img
          className="absolute top-[68.19rem] left-[18.75rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <b className="absolute top-[75.25rem] left-[54.63rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          Private
        </b>
        <b className="absolute top-[75.25rem] left-[18.5rem] flex items-center justify-center w-[12.5rem] h-[5rem]">
          x 1
        </b>
        <b className="absolute top-[75.25rem] left-[31rem] flex items-center justify-center w-[23.63rem] h-[5rem]">
          OMG!
        </b>
        <img
          className="absolute top-[75.69rem] left-[18.75rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <img
          className="absolute top-[40.25rem] left-[76.88rem] w-[25rem] h-[25rem] object-cover"
          alt=""
          src="/lobby/userList.png"
        />
        <img
          className="absolute top-[44.38rem] left-[81.63rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <img
          className="absolute top-[44.38rem] left-[93.88rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <img
          className="absolute top-[56.25rem] left-[81.63rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <img
          className="absolute top-[56.25rem] left-[93.88rem] w-[3.13rem] h-[4.17rem] object-cover"
          alt=""
          src="/lobby/user.png"
        />
        <b className="absolute top-[70.63rem] left-[76.88rem] flex items-center w-[5rem] h-[9.63rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Chat</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Time</p>
          </span>
        </b>
        <b className="absolute top-[71.81rem] left-[92.94rem] flex items-center justify-center w-[5rem] h-[2.13rem]">
          Mode
        </b>
        <b className="absolute top-[74.63rem] left-[91.63rem] flex text-cornflowerblue items-center justify-center w-[7.56rem] h-[2.13rem]">
          Private
        </b>
        <b className="absolute top-[72.13rem] left-[84rem] text-[1rem] flex text-cornflowerblue items-center justify-center w-[1.69rem] h-[1.5rem]">
          ON
        </b>
        <b className="absolute top-[76.69rem] left-[82.81rem] flex text-left items-center w-[6.56rem] h-[2.5rem] text-[2.25rem] text-cornflowerblue">
          <span className="[line-break:anywhere] w-full">
            <span>
              <span>30</span>
            </span>
            <span>
              <span>{` `}</span>
              <span className="text-[1.5rem]">min</span>
            </span>
          </span>
        </b>
        <img
          className="absolute top-[77.59rem] left-[89.81rem] rounded-3xs w-[11.25rem] h-[1.88rem]"
          alt=""
          src="/lobby/pw.png"
        />
        <b className="absolute top-[77.63rem] left-[90.56rem] text-[1.25rem] flex text-black text-left items-end w-[10rem] h-[1.94rem]">
          ****
        </b>
        <b className="absolute top-[60.88rem] left-[90.94rem] text-[1.25rem] flex items-end justify-center w-[8.75rem] h-[1.88rem]">
          준수
        </b>
        <b className="absolute top-[49rem] left-[78.88rem] text-[1.25rem] flex items-end justify-center w-[8.75rem] h-[1.88rem]">
          헌수
        </b>
        <b className="absolute top-[49rem] left-[90.94rem] text-[1.25rem] flex items-end justify-center w-[8.75rem] h-[1.88rem]">
          재훈
        </b>
        <b className="absolute top-[60.88rem] left-[78.88rem] text-[1.25rem] flex items-end justify-center w-[8.75rem] h-[1.88rem]">
          윤호
        </b>
        <div className="absolute top-[42.75rem] left-[91rem] w-[8.75rem] h-[8.75rem] text-[4rem] font-inter">
          <div className="absolute top-[0rem] left-[0rem] bg-darkslategray [filter:blur(4px)] w-[8.75rem] h-[8.75rem]" />
          <div className="absolute top-[1.56rem] left-[1.69rem] w-[4.93rem] h-[4.99rem]">
            <div className="absolute top-[2.5rem] left-[0rem] tracking-[0.01em] flex items-center justify-center w-[3.51rem] h-[3.51rem] [transform:_rotate(-45.34deg)] [transform-origin:0_0]">
              +
            </div>
          </div>
        </div>
        <div className="absolute top-[42.75rem] left-[78.75rem] w-[8.75rem] h-[8.75rem] text-[4rem] font-inter">
          <div className="absolute top-[0rem] left-[0rem] bg-darkslategray [filter:blur(4px)] w-[8.75rem] h-[8.75rem]" />
          <div className="absolute top-[1.56rem] left-[1.69rem] w-[4.93rem] h-[4.99rem]">
            <div className="absolute top-[2.5rem] left-[0rem] tracking-[0.01em] flex items-center justify-center w-[3.51rem] h-[3.51rem] [transform:_rotate(-45.34deg)] [transform-origin:0_0]">
              +
            </div>
          </div>
        </div>
        <div className="absolute top-[54.88rem] left-[91rem] w-[8.75rem] h-[8.75rem] text-[4rem] font-inter">
          <div className="absolute top-[0rem] left-[0rem] bg-darkslategray [filter:blur(4px)] w-[8.75rem] h-[8.75rem]" />
          <div className="absolute top-[1.56rem] left-[1.69rem] w-[4.93rem] h-[4.99rem]">
            <div className="absolute top-[2.5rem] left-[0rem] tracking-[0.01em] flex items-center justify-center w-[3.51rem] h-[3.51rem] [transform:_rotate(-45.34deg)] [transform-origin:0_0]">
              +
            </div>
          </div>
        </div>
        <div className="absolute top-[54.88rem] left-[78.75rem] w-[8.75rem] h-[8.75rem] text-[4rem] font-inter">
          <div className="absolute top-[0rem] left-[0rem] bg-darkslategray [filter:blur(4px)] w-[8.75rem] h-[8.75rem]" />
          <div className="absolute top-[1.56rem] left-[1.69rem] w-[4.93rem] h-[4.99rem]">
            <div className="absolute top-[2.5rem] left-[0rem] tracking-[0.01em] flex items-center justify-center w-[3.51rem] h-[3.51rem] [transform:_rotate(-45.34deg)] [transform-origin:0_0]">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
