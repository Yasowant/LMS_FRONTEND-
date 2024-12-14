import React from "react";
import HomeBanner1 from "../assets/images/HomeBanner1.png";
export const Home = () => {
  return (
    <div className="  flex md:flex-row flex-col justify-center items-center w-[100%] md:h-[100vh] h-auto py-4  ">
      <div className="flex flex-col p-4 md:w-[50%] w-[100%] md:order-1 order-2">
        <span className="font-bold text-[1.5rem] ">
          Welcome to LMS – Your Gateway to Endless Learning Opportunities!
        </span>
        <small>
          At LMS, we believe that education has the power to transform lives.
          Whether you're here to enhance your skills, unlock new opportunities,
          or inspire others as an instructor, we are dedicated to supporting
          your journey. Our platform is designed to make learning accessible,
          personalized, and impactful. Take the first step toward achieving your
          goals—be it mastering a new subject or empowering others through
          teaching.
        </small>
      </div>

      <div className="h-[100%] flex justify-center items-center md:w-[50%] w-[100%] order-1 md:order-2">
        <img src={HomeBanner1} alt="" className="h-[90%] w-[95%]" />
      </div>
    </div>
  );
};
