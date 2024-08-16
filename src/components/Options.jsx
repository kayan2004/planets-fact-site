/* eslint-disable react/prop-types */

const Options = ({ planet, onClick, currentOption, className }) => {
  console.log(planet);
  var background;
  var border;
  switch (planet) {
    case "mercury":
      background = `md:bg-mercury`;
      border = `border-mercury`;
      break;
    case "venus":
      background = `md:bg-venus`;
      border = `border-venus`;
      break;
    case "earth":
      background = `md:bg-earth`;
      border = `border-earth`;
      break;
    case "mars":
      background = `md:bg-mars`;
      border = `border-mars`;
      break;
    case "jupiter":
      background = `md:bg-jupiter`;
      border = `border-jupiter`;
      break;
    case "saturn":
      background = `md:bg-saturn`;
      border = `border-saturn`;
      break;
    case "uranus":
      background = `md:bg-uranus`;
      border = `border-uranus`;
      break;
    case "neptune":
      background = `md:bg-neptune`;
      border = `border-neptune`;
      break;
  }
  return (
    <ul
      className={`${className} py-8 md:py-0 flex md:flex-col w-full justify-between row-span-1 col-span-1  font-spartan font-semibold text-xs uppercase tracking-widest text-white   md:gap-3 md:row-start-2 md:row-end-2 md:col-start-2
      lg:row-start-2 lg:row-end-2 lg:col-start-3 lg:h-3/5 justify-self-start self-start`}
    >
      <li
        key={0}
        onClick={() => {
          onClick(0);
        }}
        className={`${
          currentOption === 0
            ? ` border-b-2 ${border} ${background} md:border-0 `
            : ``
        }  font-spartan font-bold text-xs py-6 px-4 flex gap-4`}
        tabIndex={0}
      >
        <span className="hidden md:inline-block opacity-50">01</span>
        <span
          className={`${
            currentOption === 0 ? `opacity-50 md:opacity-100` : ``
          }`}
        >
          overview
        </span>
      </li>
      <li
        key={1}
        onClick={() => {
          onClick(1);
        }}
        className={`${
          currentOption === 1
            ? ` border-b-2 ${border} ${background} md:border-0 `
            : ``
        }  font-spartan font-bold font-xs py-6 px-4 flex gap-4`}
        tabIndex={0}
      >
        <span className="hidden md:inline-block opacity-50">02</span>
        <span
          className={`${
            currentOption === 1 ? `opacity-50 md:opacity-100` : ``
          }`}
        >
          <span className="hidden md:inline-block">internal</span> surface
        </span>
      </li>
      <li
        key={2}
        onClick={() => {
          onClick(2);
        }}
        className={`${
          currentOption === 2
            ? ` border-b-2 ${border} ${background} md:border-0 `
            : ``
        }  font-spartan font-bold font-xs py-6 px-4 flex gap-4`}
        tabIndex={0}
      >
        <span className="hidden md:inline-block opacity-50">03</span>
        <span
          className={`${
            currentOption === 2 ? `opacity-50 md:opacity-100` : ``
          }`}
        >
          surface <span className="hidden md:inline-block"> geology</span>
        </span>
      </li>
    </ul>
  );
};

export default Options;
