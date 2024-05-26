import Social from "./Social";
import linkedinPhoto from "../assets/linkedin.png";
import downloadPhoto from "../assets/downloadlogo.png";
export default function HeaderSide({ style, children }) {
  return (
    <div className="flex flex-col">
      <p
        className={
          "mt-10 flex grow items-center justify-center text-center md:text-5xl sm:text-3xl xl:text-7xl tracking-wide text-tangerineyellow"
        }
      >
        {children}
      </p>
      <div className="flex flex-row items-center justify-center space-x-4 ">
        <Social
          image={linkedinPhoto}
          text="LinkedIn"
          link="https://www.linkedin.com/in/nabeel-elberry/"
          download={false}
        />

        <Social
          image={downloadPhoto}
          text="Download CV"
          link="../assets/Nabeel_Elberry_Resume.pdf"
          download={true}
        />
      </div>
    </div>
  );
}
