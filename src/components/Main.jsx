/* eslint-disable react/prop-types */
import Planet from "./Planet";
const Main = ({ planet }) => {
  return (
    <>
      <Planet currentPlanet={planet}></Planet>
    </>
  );
};

export default Main;
