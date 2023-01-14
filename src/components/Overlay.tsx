import { FC, ReactNode } from "react";

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
        className={`fixed z-[10000] w-screen h-screen bg-geocaching-green bg-opacity-40 backdrop-grayscale transition-all duration-700 ${backgroundVisibilityClass}`}
        onClick={() => onClose && onClose()}
      ></div>
      <div
        className={`fixed z-[10001] w-[80%] md:w-1/2 xl:w-1/4 h-screen right-0 transition-all duration-700`}
      >
        <div
          className={`absolute w-full h-screen bg-white shadow-2xl transition-all duration-700 ${foregroundVisibilityClass}`}
          onClick={(event) => event.preventDefault()}
        >
          {onClose && (
            <div className="absolute right-4 top-4 cursor-pointer" onClick={() => onClose()}>
              Close
            </div>
          )}
          <div className="p-8">{children && children}</div>
        </div>
      </div>
    </>
  );
};
