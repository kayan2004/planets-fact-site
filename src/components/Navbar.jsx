/* eslint-disable react/prop-types */

const Navbar = ({ className, handleSetPlanet, toggleVisibility }) => {
  return (
    <nav
      className={`${className} row-span-2 col-start-1 col-end-3  w-full  z-10  h-svh md:h-min lg:w-1/2  `}
    >
      <ul className="text-base font-bold text-white md:font-semibold md:text-xs tracking-widest uppercase flex flex-col justify-evenly md:flex-row h-full ">
        <li
          onClick={() => {
            handleSetPlanet("mercury");
            toggleVisibility();
          }}
          className={`font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12`}
        >
          <div className="rounded-full bg-white h-4 w-4 md:hidden "></div>
          <span className="">mercury</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>

        <li
          onClick={() => {
            handleSetPlanet("venus");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          <div className="rounded-full bg-venus h-4 w-4 md:hidden "></div>
          <span className="">venus</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
        <li
          onClick={() => {
            handleSetPlanet("earth");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak  border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          {" "}
          <div className="rounded-full bg-earth h-4 w-4 md:hidden "></div>
          <span className="">earth</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
        <li
          onClick={() => {
            handleSetPlanet("mars");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak  border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          {" "}
          <div className="rounded-full bg-red h-4 w-4 md:hidden "></div>
          <span className="">mars</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
        <li
          onClick={() => {
            handleSetPlanet("jupiter");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak  border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          {" "}
          <div className="rounded-full bg-jupiter h-4 w-4 md:hidden "></div>
          <span className="">jupiter</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
        <li
          onClick={() => {
            handleSetPlanet("saturn");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          {" "}
          <div className="rounded-full bg-saturn h-4 w-4 md:hidden "></div>
          <span className="">saturn</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
        <li
          onClick={() => {
            handleSetPlanet("uranus");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak  border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          {" "}
          <div className="rounded-full bg-uranus h-4 w-4 md:hidden "></div>
          <span className="">uranus</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
        <li
          onClick={() => {
            handleSetPlanet("neptune");
            toggleVisibility();
          }}
          className="font-spartan cursor-pointer  hover:font-light gap-4 py-4 flex items-center border-linebreak  border-b md:border-b-0 md:p-0 lg:hover:border-t-2 lg:border-blue lg:pt-12"
        >
          {" "}
          <div className="rounded-full bg-neptune h-4 w-4 md:hidden "></div>
          <span className="">neptune</span>
          <svg
            className="md:hidden ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
