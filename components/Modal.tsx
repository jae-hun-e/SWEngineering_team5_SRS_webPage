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
        "z-50 w-full h-full bg-black overflow-auto bg-opacity-40 flex justify-center items-center fixed top-0 left-0"
      )}
    >
      <div className="w-[30vw] h-[40vh] bg-white flex flex-col justify-center items-center">
        {children}
        <button
          onClick={handleClose}
          className="w-[10rem] h-[3rem] text-11xl hover:bg-amber-100 hover:opacity-80 cursor-pointer"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
