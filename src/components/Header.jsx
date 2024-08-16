/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "./Navbar";

const MenuIcon = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="group flex flex-col justify-between mt-8 h-6 md:hidden cursor-pointer  focus:fill-grey  self-end justify-self-end"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
        <g className="group-focus:fill-grey" fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </button>
  );
};

const Header = ({ handleSetPlanet }) => {
  const [visible, setVisible] = useState(false);
  console.log(visible);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <header className="bg-black text-white grid grid-rows-[auto_auto] grid-cols-2 gap-y-6  p-8 py-0 md:grid-cols-1 lg:flex lg:justify-between ">
      <h1 className="font-antonio font-light uppercase text-3xl mt-8 md:text-center justify-self-start self-center md:justify-self-center ">
        The planets
      </h1>
      <MenuIcon onClick={toggleVisibility}></MenuIcon>
      <hr className="absolute left-0 right-0 top-24 w-screen border-t border-gray-300 opacity-20 md:hidden " />
      <Navbar
        toggleVisibility={toggleVisibility}
        handleSetPlanet={handleSetPlanet}
        className={visible ? "" : "hidden md:block"}
      ></Navbar>
    </header>
  );
};

export default Header;
