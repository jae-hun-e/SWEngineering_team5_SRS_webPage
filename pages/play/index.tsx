import type {NextPage} from "next";
import {useState} from "react";
import Modal from "@components/Modal";

const Play: NextPage = () => {
  const [showModal, setShowModal] = useState(Array(7).fill(false)); // [상대 농장/카드, 상대 재료, main map, 내 카드, 내 재료, 내 카드, 채팅)
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
    <div className="flex justify-center bg-yellowgreen relative">
      <div className=" relative bg-yellowgreen fSize:w-[120rem] w-full h-[250rem] overflow-hidden text-center text-[2.25rem] text-black font-inter">
        {/*TODO main map*/}
        <div>
          <button
            onClick={() => handleShowModal(2)}
            className="absolute top-[10rem] left-[13.44rem] w-[93.13rem] h-[74.69rem]
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
          />
          <Modal show={showModal[2]} handleClose={() => handleCloseModal(2)}>
            {/* <p className="text-black">안에 들어갈 데이터(게임 맵)</p> */}
            <div>
              <img
                src="/sidebar/g_mainboard_1.png"
                alt=""
                className="fixed w-[720px] bg-stone-200 border-solid border-b-[2px] border-black"
              />
              <img src="/sidebar/g_mainboard_2.png" alt="" className="mt-[758.4px] w-[720px] bg-stone-200" />
            </div>
          </Modal>
          <img
            className="absolute top-[10rem] left-[13.44rem] w-[93.13rem] h-[74.69rem] object-cover"
            alt=""
            src="/play/mapbg.png"
          />
        </div>

        {/*TODO my map*/}
        <div>
          <button
            onClick={() => handleShowModal(3)}
            className="absolute top-[91.25rem] left-[10.38rem] w-[64.19rem] h-[45.75rem]
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
          />
          <Modal show={showModal[3]} handleClose={() => handleCloseModal(3)}>
            {/* <p className="text-black">안에 들어갈 데이터(유저 농장)</p> */}
            <div>
              <img
                src="/sidebar/g_farm_1.png"
                alt=""
                className="fixed w-[720px] bg-stone-200 border-solid border-b-[2px] border-black"
              />
              <img src="/sidebar/g_farm_2.png" alt="" className="mt-[758.4px] w-[720px] bg-stone-200" />
            </div>
          </Modal>
          <img
            className="absolute top-[91.25rem] left-[10.38rem] w-[64.19rem] h-[45.75rem] object-cover"
            alt=""
            src="/play/my/map.png"
          />
        </div>

        {/*TODO chat*/}
        <div>
          <button
            onClick={() => handleShowModal(6)}
            className="absolute top-[96.63rem] left-[74.5rem] bg-olivedrab box-border w-[35rem] h-[25rem]
                      border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
          />
          <Modal show={showModal[6]} handleClose={() => handleCloseModal(6)}>
            {/* <p className="text-black">안에 들어갈 데이터(채팅)</p> */}
            <div>
              <img src="/sidebar/g_chat.png" alt="" className="w-[720px] bg-stone-200" />
            </div>
          </Modal>

          <div className="absolute top-[96.63rem] left-[74.5rem] bg-olivedrab box-border w-[35rem] h-[25rem] border-[3px] border-solid border-black" />
          <div className="absolute top-[96.63rem] left-[74.5rem] bg-gray-400 w-[35rem] h-[2.5rem]" />
          <div className="absolute top-[96.63rem] left-[77.44rem] text-[2rem] font-buenard text-white inline-block w-[8.13rem] h-[2.5rem]">
            Chat
          </div>
          <div className="absolute top-[100.13rem] left-[75.13rem] w-[18.75rem] h-[4rem] text-[1.25rem] text-indigo font-buenard">
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-b-3xs bg-linen w-[18.75rem] h-[4rem]" />
            <div className="absolute top-[0.38rem] left-[1.31rem]">재훈</div>
            <div className="absolute top-[2.25rem] left-[1.31rem] text-black">게임을 시작하겠습니다!</div>
            <div className="absolute top-[3.06rem] left-[15.25rem] text-[0.63rem] font-roboto text-gray-500 inline-block w-[3rem] h-[0.69rem]">
              오전 11:00
            </div>
          </div>

          <img
            className="absolute top-[119.13rem] left-[74.5rem] w-[35rem] h-[2.5rem]"
            alt=""
            src="/play/my/input.png"
          />
          <div className="absolute top-[119.5rem] left-[75.44rem] text-[1rem] font-roboto text-left flex items-center w-[32.63rem] h-[1.75rem]">
            대화를 입력하세요.
          </div>
        </div>

        {/*TODO 상대1*/}
        <div className="absolute top-[10rem] left-[0rem] w-[10rem] h-[65rem]">
          <div>
            <button
              onClick={() => handleShowModal(1)}
              className="absolute top-[0rem] left-[0rem]  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[10rem] h-[65rem]
          border-[4px] border-solid border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10 bg-transparent"
            />
            <Modal show={showModal[1]} handleClose={() => handleCloseModal(1)}>
              <div>
                <img
                  src="/sidebar/g_other_res_1.png"
                  alt=""
                  className="fixed w-[720px] bg-stone-200 border-solid border-b-[2px] border-black"
                />
                <img src="/sidebar/g_other_res_2.png" alt="" className="mt-[758.4px] w-[720px] bg-stone-200" />
              </div>
            </Modal>
          </div>

          <div className="absolute top-[0rem] left-[0rem] bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[10rem] h-[65rem] border-[4px] border-solid border-black" />
          <div className="absolute top-[60rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[0rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[20rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[40rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[10rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[30rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[50rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[5rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[25rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[45rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[15rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[35rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[55rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[0.38rem] left-[5.63rem] w-[3.75rem] h-[64.38rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[4.27rem] object-cover"
              alt=""
              src="/play/board/1.png"
            />
            <img
              className="absolute top-[5.06rem] left-[0rem] w-[3.75rem] h-[4.08rem] object-cover"
              alt=""
              src="/play/board/2.png"
            />
            <img
              className="absolute top-[9.88rem] left-[0rem] w-[3.75rem] h-[4.48rem] object-cover"
              alt=""
              src="/play/board/3.png"
            />
            <img
              className="absolute top-[14.88rem] left-[0rem] w-[3.75rem] h-[4.41rem] object-cover"
              alt=""
              src="/play/board/4.png"
            />
            <img
              className="absolute top-[35.75rem] left-[0rem] w-[3.75rem] h-[2.74rem] object-cover"
              alt=""
              src="/play/board/5.png"
            />
            <img
              className="absolute top-[40.63rem] left-[0rem] w-[3.75rem] h-[3.06rem] object-cover"
              alt=""
              src="/play/board/6.png"
            />
            <img
              className="absolute top-[30.69rem] left-[0rem] w-[3.75rem] h-[2.88rem] object-cover"
              alt=""
              src="/play/board/7.png"
            />
            <img
              className="absolute top-[24.94rem] left-[0rem] w-[3.75rem] h-[4.35rem] object-cover"
              alt=""
              src="/play/board/8.png"
            />
            <img
              className="absolute top-[20.13rem] left-[0rem] w-[3.75rem] h-[3.95rem] object-cover"
              alt=""
              src="/play/board/9.png"
            />
            <img
              className="absolute top-[45.13rem] left-[-0.25rem] w-[4.25rem] h-[4.52rem] object-cover"
              alt=""
              src="/play/board/10.png"
            />
            <img
              className="absolute top-[59.81rem] left-[0rem] w-[3.75rem] h-[4.56rem] object-cover"
              alt=""
              src="/play/board/11.png"
            />
            <img
              className="absolute top-[50.44rem] left-[0rem] w-[3.75rem] h-[3.39rem] object-cover"
              alt=""
              src="/play/board/12.png"
            />
            <img
              className="absolute top-[55.25rem] left-[0rem] w-[3.75rem] h-[3.79rem] object-cover"
              alt=""
              src="/play/board/13.png"
            />
          </div>
          <div className="absolute top-[0.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[5.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[10.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[15.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[20.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[25.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[30.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[35.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[45.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[50.63rem] left-[0.63rem] text-[1.88rem] text-left flex items-center w-[5rem] h-[3.75rem]">
            0/15
          </div>
          <div className="absolute top-[55.63rem] left-[0.63rem] text-[1.88rem] text-left flex items-center w-[5rem] h-[3.75rem]">
            0/4
          </div>
          <div className="absolute top-[60.63rem] left-[0.63rem] text-[1.88rem] text-left flex items-center w-[5rem] h-[3.75rem]">
            2/5
          </div>
          <div className="absolute top-[40.63rem] left-[0.63rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
        </div>

        {/* TODO 상대2*/}
        <div className="absolute top-[10rem] left-[30rem] w-[10rem] h-[65rem] ">
          <div>
            <button
              onClick={() => handleShowModal(1)}
              className="absolute top-[0rem] left-[0rem] bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[10rem] h-[65rem] [transform:_rotate(-90deg)] [transform-origin:0_0]
          border-[4px] border-solid border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10 bg-transparent"
            />
          </div>

          <div className="absolute top-[0rem] left-[0rem] bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[10rem] h-[65rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[4px] border-solid border-black" />
          <div>
            <div className="absolute top-[0rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[5rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[10rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[15rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[20rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[25rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[30rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[35rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[40rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[45rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[50rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[55rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[60rem] bg-olivedrab box-border w-[10rem] h-[5rem] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[1px] border-solid border-black" />
            <div className="absolute top-[-0.62rem] left-[0.64rem] w-[4.56rem] h-[63.71rem]  [transform-origin:0_0]">
              <img
                className="absolute top-[-4.42rem] left-[0rem] w-[3.75rem] h-[4.27rem] object-cover"
                alt=""
                src="/play/board/1.png"
              />
              <img
                className="absolute top-[-4.32rem] left-[4.97rem] w-[3.75rem] h-[4.08rem] object-cover"
                alt=""
                src="/play/board/2.png"
              />
              <img
                className="absolute top-[-4.52rem] left-[9.98rem] w-[3.75rem] h-[4.48rem] object-cover"
                alt=""
                src="/play/board/3.png"
              />
              <img
                className="absolute top-[-4.49rem] left-[14.94rem] w-[3.75rem] h-[4.41rem] object-cover"
                alt=""
                src="/play/board/4.png"
              />
              <img
                className="absolute top-[-3.65rem] left-[34.98rem] w-[3.75rem] h-[2.74rem] object-cover"
                alt=""
                src="/play/board/5.png"
              />
              <img
                className="absolute top-[-3.81rem] left-[40.02rem] w-[3.75rem] h-[3.06rem] object-cover"
                alt=""
                src="/play/board/6.png"
              />
              <img
                className="absolute top-[-3.72rem] left-[29.99rem] w-[3.75rem] h-[2.88rem] object-cover"
                alt=""
                src="/play/board/7.png"
              />
              <img
                className="absolute top-[-4.46rem] left-[24.98rem] w-[3.75rem] h-[4.35rem] object-cover"
                alt=""
                src="/play/board/8.png"
              />
              <img
                className="absolute top-[-4.26rem] left-[19.97rem] w-[3.75rem] h-[3.95rem] object-cover"
                alt=""
                src="/play/board/9.png"
              />
              <img
                className="absolute top-[-4.29rem] left-[44.75rem] w-[4.25rem] h-[4.52rem] object-cover"
                alt=""
                src="/play/board/10.png"
              />
              <img
                className="absolute top-[-4.56rem] left-[59.96rem] w-[3.75rem] h-[4.56rem] object-cover"
                alt=""
                src="/play/board/11.png"
              />
              <img
                className="absolute top-[-3.98rem] left-[50rem] w-[3.75rem] h-[3.39rem] object-cover"
                alt=""
                src="/play/board/12.png"
              />
              <img
                className="absolute top-[-4.18rem] left-[55.01rem] w-[3.75rem] h-[3.79rem] object-cover"
                alt=""
                src="/play/board/13.png"
              />
            </div>
            <div className="absolute top-[-6.03rem] left-[0rem] w-[3.75rem] h-[65rem] [transform-origin:0_0]">
              <div className="absolute top-[-3.75rem] left-[0rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[5rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[10rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[15rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[20rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[25rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[30rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[35rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[45rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
              <div className="absolute top-[-3.75rem] left-[50rem] text-[1.88rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0/15
              </div>
              <div className="absolute top-[-3.75rem] left-[55rem] text-[1.88rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0/4
              </div>
              <div className="absolute top-[-3.75rem] left-[60rem] text-[1.88rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                2/5
              </div>
              <div className="absolute top-[-3.75rem] left-[40rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
                0
              </div>
            </div>
          </div>
        </div>

        {/* TODO 상대3*/}
        <div className="absolute top-[10rem] left-[110rem] w-[10rem] h-[65rem]">
          <div>
            <button
              onClick={() => handleShowModal(1)}
              className="absolute top-[0rem] left-[0rem] bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[10rem] h-[65rem]
          border-[4px] border-solid border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10 bg-transparent"
            />
          </div>

          <div className="absolute top-[0rem] left-[0rem] bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[10rem] h-[65rem] border-[4px] border-solid border-black" />
          <div className="absolute top-[60rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[0rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[20rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[40rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[10rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[30rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[50rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[5rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[25rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[45rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[15rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[35rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <div className="absolute top-[55rem] left-[0rem] bg-olivedrab box-border w-[10rem] h-[5rem] border-[1px] border-solid border-black" />
          <img
            className="absolute top-[0.38rem] left-[0.63rem] w-[3.75rem] h-[4.27rem] object-cover"
            alt=""
            src="/play/board/1.png"
          />
          <img
            className="absolute top-[5.44rem] left-[0.63rem] w-[3.75rem] h-[4.08rem] object-cover"
            alt=""
            src="/play/board/2.png"
          />
          <img
            className="absolute top-[10.25rem] left-[0.63rem] w-[3.75rem] h-[4.48rem] object-cover"
            alt=""
            src="/play/board/3.png"
          />
          <img
            className="absolute top-[15.25rem] left-[0.63rem] w-[3.75rem] h-[4.41rem] object-cover"
            alt=""
            src="/play/board/4.png"
          />
          <img
            className="absolute top-[36.13rem] left-[0.63rem] w-[3.75rem] h-[2.74rem] object-cover"
            alt=""
            src="/play/board/5.png"
          />
          <img
            className="absolute top-[41rem] left-[0.63rem] w-[3.75rem] h-[3.06rem] object-cover"
            alt=""
            src="/play/board/6.png"
          />
          <img
            className="absolute top-[31.06rem] left-[0.63rem] w-[3.75rem] h-[2.88rem] object-cover"
            alt=""
            src="/play/board/7.png"
          />
          <img
            className="absolute top-[25.31rem] left-[0.63rem] w-[3.75rem] h-[4.35rem] object-cover"
            alt=""
            src="/play/board/8.png"
          />
          <img
            className="absolute top-[20.5rem] left-[0.63rem] w-[3.75rem] h-[3.95rem] object-cover"
            alt=""
            src="/play/board/9.png"
          />
          <img
            className="absolute top-[45.5rem] left-[0.38rem] w-[4.25rem] h-[4.52rem] object-cover"
            alt=""
            src="/play/board/10.png"
          />
          <img
            className="absolute top-[60.19rem] left-[0.63rem] w-[3.75rem] h-[4.56rem] object-cover"
            alt=""
            src="/play/board/11.png"
          />
          <img
            className="absolute top-[50.81rem] left-[0.63rem] w-[3.75rem] h-[3.39rem] object-cover"
            alt=""
            src="/play/board/12.png"
          />
          <img
            className="absolute top-[55.63rem] left-[0.63rem] w-[3.75rem] h-[3.79rem] object-cover"
            alt=""
            src="/play/board/13.png"
          />
          <div className="absolute top-[0.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[5.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[10.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[15.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[20.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[25.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[30.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[35.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[45.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
          <div className="absolute top-[50.63rem] left-[4.38rem] text-[1.88rem] text-right flex items-center w-[5rem] h-[3.75rem]">
            0/15
          </div>
          <div className="absolute top-[55.63rem] left-[4.38rem] text-[1.88rem] text-right flex items-center w-[5rem] h-[3.75rem]">
            0/4
          </div>
          <div className="absolute top-[60.63rem] left-[4.38rem] text-[1.88rem] text-right flex items-center w-[5rem] h-[3.75rem]">
            2/5
          </div>
          <div className="absolute top-[40.63rem] left-[4.38rem] flex items-center justify-center w-[5rem] h-[3.75rem]">
            0
          </div>
        </div>

        {/* TODO 유저*/}
        <div>
          <div>
            {/*TODO 유저 카드*/}
            <button
              onClick={() => handleShowModal(5)}
              className="absolute top-[124.13rem] left-[76.5rem] w-[7.5rem] h-[7.5rem] rounded-xl
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
            <Modal show={showModal[5]} handleClose={() => handleCloseModal(5)}>
              {/* <p className="text-black">안에 들어갈 데이터(유저카드)</p> */}
              <div>
                <img
                  src="/sidebar/g_card_1.png"
                  alt=""
                  className="fixed w-[720px] bg-stone-200 border-solid border-b-[2px] border-black"
                />
                <img src="/sidebar/g_card_2.png" alt="" className="mt-[758.4px] w-[720px] bg-stone-200" />
              </div>
            </Modal>

            <div className="absolute top-[124.13rem] left-[76.5rem] w-[7.5rem] h-[7.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-khaki shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[7.5rem] h-[7.5rem] border-[4px] border-solid border-black" />
              <div className="absolute top-[0.94rem] left-[0.94rem] rounded-xl bg-brown box-border w-[5.63rem] h-[5.63rem] border-[2px] border-solid border-black" />
              <img className="absolute top-[1rem] left-[1rem] w-[5.5rem] h-[5.5rem]" alt="" src="/play/my/card1.png" />
            </div>

            {/*TODO 유저 점수계산*/}
            <button
              onClick={() => handleShowModal(4)}
              className="absolute top-[124.13rem] left-[85.63rem] w-[7.5rem] h-[7.5rem] text-[4rem] rounded-xl
                        border-[4px] border-solid border-red-500 bg-transparent hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
            <Modal show={showModal[4]} handleClose={() => handleCloseModal(4)}>
              <img src="/sidebar/g_score.png" alt="" className="w-[720px] bg-stone-200" />
            </Modal>
            <div className="absolute top-[124.13rem] left-[85.63rem] w-[7.5rem] h-[7.5rem] text-[4rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-khaki shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[7.5rem] h-[7.5rem] border-[4px] border-solid border-black" />
              <div className="absolute top-[0.94rem] left-[0.94rem] rounded-xl bg-olive box-border w-[5.63rem] h-[5.63rem] border-[2px] border-solid border-black" />
              <img className="absolute top-[1rem] left-[1rem] w-[5.5rem] h-[5.5rem]" alt="" src="/play/my/card2.png" />
              <div className="absolute top-[0.94rem] left-[0.94rem] flex items-center justify-center w-[5.63rem] h-[5.63rem]">
                ?
              </div>
            </div>
          </div>
          {/* TODO 유저 상태*/}
          <div></div>
        </div>
        {/*TODO 캐릭터 상태창*/}
        <div>
          <button
            onClick={() => handleShowModal(0)}
            className="absolute top-[3.9rem] left-[112.2rem] w-[5.6rem] h-[5.6rem]
          border-[4px] border-solid rounded-[4rem] bg-transparent border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
          />
          <Modal show={showModal[0]} handleClose={() => handleCloseModal(0)}>
            <img src="/sidebar/g_other_info.png" alt="" className="w-[720px] bg-stone-200" />
          </Modal>

          <img className="absolute top-[3.94rem] left-[112.25rem] w-[5.5rem] h-[5.5rem]" alt="" src="/play/user.png" />

          <div>
            <button
              onClick={() => handleShowModal(0)}
              className="absolute top-[2.5rem] left-[23.44rem] w-[5.5rem] h-[5.5rem]
          border-[4px] border-solid rounded-[4rem] bg-transparent border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
          </div>
          <img className="absolute top-[2.5rem] left-[23.44rem] w-[5.5rem] h-[5.5rem]" alt="" src="/play/user.png" />
          <div>
            <button
              onClick={() => handleShowModal(0)}
              className="absolute top-[3.94rem] left-[2.25rem] w-[5.5rem] h-[5.5rem]
          border-[4px] border-solid rounded-[4rem] bg-transparent border-red-500 hover:bg-amber-100 hover:opacity-30 cursor-pointer z-10"
            />
          </div>
          <img className="absolute top-[3.94rem] left-[2.25rem] w-[5.5rem] h-[5.5rem]" alt="" src="/play/user.png" />
        </div>
      </div>
    </div>
  );
};

export default Play;
