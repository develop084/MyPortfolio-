import React from "react";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="border-bottom border-b border-stone-300 pb-4 bg-zinc-100	">
      <div className="pt-3 flex justify-around items-center flex-row-reverse  ">
        <div>
          <h3 className="text-4xl text-neutral-500 hover:text-stone-900 cursor-pointer">
            {" "}
            <FaGithub />
          </h3>
        </div>
        <div>
          <img src="/logo-dev.svg" className="h-12" alt="dev-logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
