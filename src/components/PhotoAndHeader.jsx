import Photo from "./Photo";
import HeaderSide from "./HeaderSide";
import { Fragment } from "react";
import linkedinPhoto from "../assets/linkedin.png";
import Social from "./Social";
export default function PhotoAndHeader({ style }) {
  return (
    <Fragment>
      <Photo className={style} />
      <div className="flex flex-row align-center justify-center items-center grow">
        <HeaderSide className="flex-grow">Nabeel Elberry</HeaderSide>
      </div>
    </Fragment>
  );
}
