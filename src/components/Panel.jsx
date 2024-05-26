import { Fragment } from "react";
import { forwardRef } from "react";

export default function Panel({ image, description, onClick, ref }) {
  return (
    <div
      ref={ref}
      className="flex flex-col align-center w-1/3 pl-10 pr-10 justify-items-center justify-center content-center items-center
        transform
        active:-translate-y-10
        focus:-translate-y-10
        hover:scale-105
        cursor-pointer
        transition
        ease-in-out
        duration-500
        
        bg-panelbg
        pb-10
        pt-4
        rounded-3xl
        border-b-4
        border-r-4
        border-l-4
        border-r-paneloutline
        border-b-paneloutline
        border-l-paneloutline
        
        "
      onClick={onClick}
      tabIndex={0}
    >
      <div className="flex flex-col w-full h-full justify-items-center justify-center items-center text-white">
        <img className="size-32" src={image}></img>

        <p className="text-center text-sky-400">{description}</p>
      </div>
    </div>
  );
}
