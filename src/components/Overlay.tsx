import { FC, ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

export type OverlayProps = {
  visible: boolean;
  children?: ReactNode;
  onClose?: () => void;
};

export const Overlay: FC<OverlayProps> = ({ visible, children, onClose }) => {
  const backgroundVisibilityClass = visible
    ? "opacity-1 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const foregroundVisibilityClass = visible
    ? "opacity-1 translate-y-0"
    : "opacity-0 translate-y-24"

  return (
    <>
      <div
        className={`${backgroundVisibilityClass} fixed z-[10000] w-screen h-screen bg-geocaching-green bg-opacity-10 backdrop-brightness-50 backdrop-blur-sm transition-all flex flex-col items-center justify-center`}
        onClick={() => onClose && onClose()}
      >
        <div
          className={`${foregroundVisibilityClass} z-[10001] w-full md:w-3/4 xl:w-1/2 h-screen transition-all duration-700 flex flex-row items-stretch`}
        >
          <div
            className={`w-full rounded-lg bg-white m-4 shadow-2xl transition-all`}
            onClick={(event) => event.preventDefault()}
          >
            <div className="p-8">
              {onClose && (
                <div
                  className="mb-4 flex flex-row items-center justify-start text-right cursor-pointer transition-colors text-geocaching-green text-xl group"
                  onClick={() => onClose()}
                >
                  <FaArrowLeft /> 
                  <span className="ml-4 font-black transition duration-500 transform translate-x-0 group-hover:-translate-x-2">Zpátky na mapu</span>
                </div>
              )}
              {children && children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
