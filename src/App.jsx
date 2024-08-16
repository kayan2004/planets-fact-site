import Header from "./components/Header";
import { useState } from "react";
import Planet from "./components/Planet";
function App() {
  const [planet, setPlanet] = useState("mercury");
  const handleSetPlanet = (planet) => {
    setPlanet(planet);
  };
  return (
    <div className="flex flex-col bg-black bg-[url('/svg/background-stars.svg')] h-lvh">
      <Header planet={planet} handleSetPlanet={handleSetPlanet}></Header>
      <hr className="hidden w-screen h-0.5 bg-linebreak md:block"></hr>
      <Planet planet={planet}></Planet>
    </div>
  );
}

export default App;
