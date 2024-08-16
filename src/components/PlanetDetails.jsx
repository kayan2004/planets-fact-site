/* eslint-disable react/prop-types */

const PlanetDetails = ({ name, content }) => {
  return (
    <div className="bg-transparent border-2 flex justify-between items-center uppercase p-3.5  border-white border-opacity-20 md:flex-1 md:flex-col md:items-start md:gap-1 ">
      <span className="font-spartan font-bold text-xs  opacity-50">{name}</span>
      <span className="font-antonio font-light text-lg lg:text-4xl">
        {content}
      </span>
    </div>
  );
};

export default PlanetDetails;
