import { ReactNode } from "react";
import { cls } from "@libs/utils";

interface Props {
  handleClose: () => void;
  show: boolean;
  children: ReactNode;
}

const Modal = ({ handleClose, show, children }: Props) => {
  return (
    <div
      className={cls(
        show ? "block" : "hidden",
        "z-30 w-full h-full bg-black bg-opacity-40 flex justify-center items-center fixed top-0 left-0 "
      )}
    >
      <div className="w-[720px] h-[900px] pb-[80px]  bg-[#80C743] flex flex-col justify-center items-center  overflow-auto relative ">
        <div className="w-full h-full">{children}</div>
        <button
          onClick={handleClose}
          className="w-[150px] h-[50px] text-11xl hover:bg-amber-100 hover:opacity-80 cursor-pointer absolute bottom-5"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
