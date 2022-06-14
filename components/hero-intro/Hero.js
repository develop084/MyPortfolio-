import React, { useState } from "react";
import TypeAnimation from "react-type-animation";

function Hero() {
  const [hey, setHey] = useState("Hello");

  function hoverHandlerHi() {
    setHey("Hi");
  }

  function hoverHandlerHello() {
    setHey("Hello");
  }

  return (
    <div className="text-center mt-20 ">
      <div className="heading-main flex items-center justify-center xl:flex-row  md:flex-col  ">
        <h1 className="text-6xl font-bold md:mb-7 sm:mb-7">{hey}, World! </h1>
        <img
          onMouseOver={hoverHandlerHi}
          onMouseLeave={hoverHandlerHello}
          className="ml-9 hover:rotate-45"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/waving-hand_1f44b.png"
          alt="waving-hand"
        />
      </div>
      <div className="flex flex-col items-center text-2xl justify-center">
        <p className="text-semibold  text-4xl mb-5">
          I am <span className="font-bold underline">Dev</span>{" "}
        </p>
        <p className="text-3xl mt-5 mb-5">
          I Work on some Amazing Technologies 👨‍💻
        </p>

        <div className="text-5xl mt-5">
          <TypeAnimation
            cursor={true}
            sequence={[
              "JavaScript",
              3500,
              "Node.js",
              3500,
              "React.js",
              3500,
              " ",
            ]}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
