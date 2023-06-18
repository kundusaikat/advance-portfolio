import React from "react";
import Typewriter from "typewriter-effect";
import { ImageURL } from "../../data";

export const Introduction = () => {
  return (
    <div className={`bg-background1 text-text2`}>
      <div
        className={`flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden`}
      >
        <div className="md:text-xl lg:text-xl xl:text-2xl px-10 text-center py-10 md:py-0  max-w-md h-[10vh]">
          <Typewriter
            options={{
              strings: [
                "Welcome to My Full Stack Developer Portfolio!",
                "Transforming Ideas into Functional and Impactful Solutions...",
              ],
              autoStart: true,
              loop: true,
              delay: "200",
              deleteSpeed: "10",
              pauseFor: "2500",
            }}
          />
        </div>

        <div className="h-72 p-12 rounded-b-full  bg-black  box-content  overflow-hidden">
          <img
            src={ImageURL.myImage}
            alt="myImage"
            className="w-full h-full  hover:scale-150 duration-1000 rounded-b-full"
          />
        </div>
      </div>

      <div className=" flex flex-col text- gap-5 pb-10 mx-10 text-justify font-serif">
        <p>
          I'm Saikat Kundu, a passionate full stack developer with expertise in
          creating seamless user experiences and building robust web
          applications. With a strong foundation in both front-end and back-end
          development, I'm dedicated to delivering clean and efficient code that
          exceeds client expectations. Explore my portfolio to see how I bring
          ideas to life through innovation and technology.
        </p>
      </div>
    </div>
  );
};
