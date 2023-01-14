import { FC, ReactNode } from "react";
import { FaArrowRight, FaSignOutAlt } from "react-icons/fa";

export type OverlayProps = {
  visible: boolean;
  children?: ReactNode;
  onClose?: () => void;
};

export const Overlay: FC<OverlayProps> = ({ visible, children, onClose }) => {
  const foregroundVisibilityClass = visible ? "right-0" : "-right-full";
  const backgroundVisibilityClass = visible
    ? "opacity-1 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <>
      <div
        className={`fixed z-[10000] w-screen h-screen bg-geocaching-green bg-opacity-30 backdrop-brightness-50 transition-all duration-700 ${backgroundVisibilityClass}`}
        onClick={() => onClose && onClose()}
      ></div>
      <div
        className={`fixed z-[10001] w-[80%] md:w-1/2 xl:w-1/4 h-screen right-0 transition-all duration-700`}
      >
        <div
          className={`absolute w-full h-screen bg-white shadow-2xl transition-all duration-700 ${foregroundVisibilityClass}`}
          onClick={(event) => event.preventDefault()}
        >
          <div className="p-8">
            {onClose && (
              <div
                className="flex flex-row items-end justify-end text-right cursor-pointer transition-colors text-geocaching-brown-gray hover:text-black text-xl"
                onClick={() => onClose()}
              >
                <FaArrowRight />
              </div>
            )}
            {children && children}
          </div>
        </div>
      </div>
    </>
  );
};
