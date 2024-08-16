/* eslint-disable react/prop-types */
import PlanetDetails from "./PlanetDetails";
import Options from "./Options";
import { useState } from "react";
import data from "../data.json";

const Planet = ({ planet }) => {
  const [currentOption, setCurrentOption] = useState(0);

  const handleClick = (key) => {
    setCurrentOption(key);
  };
  var planetIndex = 0;
  switch (planet) {
    case "mercury":
      planetIndex = 0;
      break;
    case "venus":
      planetIndex = 1;
      break;
    case "earth":
      planetIndex = 2;
      break;
    case "mars":
      planetIndex = 3;
      break;
    case "jupiter":
      planetIndex = 4;
      break;
    case "saturn":
      planetIndex = 5;
      break;
    case "uranus":
      planetIndex = 6;
      break;
    case "neptune":
      planetIndex = 7;
      break;
  }

  const currentPlanetData = data[planetIndex];

  return (
    <div className=" flex flex-col items-center justify-center gap-10 text-white p-8 pt-0 grid-cols-1 grid-rows-3 md:grid md:grid-au md:grid-cols-2 md:grid-rows-[auto_auto_auto] lg:grid-cols-3 lg:px-60 lg:pt-28 ">
      <Options
        planet={planet}
        currentOption={currentOption}
        onClick={handleClick}
        className={` `}
      ></Options>
      <div className=" relative row-span-2 col-span-1  flex justify-center p-6 mb-8 md:row-span-1 md:col-start-1 md:col-end-3 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 ">
        <img
          src={
            currentOption === 1
              ? currentPlanetData.images.internal
              : currentPlanetData.images.planet
          }
          className="w-28 h-auto md:w-44  lg:w-72 "
        ></img>
        <div
          className={`${
            currentOption === 2 ? "" : "hidden"
          } absolute top-20 md:top-32 lg:top-52`}
        >
          <img
            src={currentPlanetData.images.geology}
            className=" w-16 h-auto md:w-24 lg:w-32 "
          ></img>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start ">
        <h2 className="font-light font-antonio text-4xl  uppercase  lg:text-7xl">
          {currentPlanetData.name.toString()}
        </h2>
        <p className="font-spartan font-normal text-center text-xs leading-5 my-6 md:text-start lg:text-sm">
          {currentOption === 0
            ? currentPlanetData.overview.content
            : currentOption === 1
            ? currentPlanetData.structure.content
            : currentPlanetData.geology.content}
        </p>
        <div className="flex items-center leading-none  gap-1 font-spartan text-xs opacity-50">
          <span>Source :</span>
          <a
            className="underline flex gap-1 "
            href={
              currentOption === 0
                ? currentPlanetData.overview.source
                : currentOption === 1
                ? currentPlanetData.structure.source
                : currentPlanetData.geology.source
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
            <img className="h-1/2" src="/assets/icon-source.svg"></img>
          </a>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-7 md:flex-row  md:col-start-1 md:col-end-3 lg:col-end-4 ">
        <PlanetDetails
          name={`rotation time`}
          content={currentPlanetData.rotation}
        ></PlanetDetails>
        <PlanetDetails
          name={`revolution time`}
          content={currentPlanetData.revolution}
        ></PlanetDetails>
        <PlanetDetails
          name={`radius`}
          content={currentPlanetData.radius}
        ></PlanetDetails>
        <PlanetDetails
          name={`average temp.`}
          content={currentPlanetData.temperature}
        ></PlanetDetails>
      </div>
    </div>
  );
};

export default Planet;
