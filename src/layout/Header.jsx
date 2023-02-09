import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper bg-headerBg h-[90px]">
      {headerToggle && (
        <div onClick={() => setHeaderToggle(false)} className="overlay"></div>
      )}
      <div className="contain justify-between items-center gap-5">
        <div className="flex justify-start items-center gap-16">
          <Link to={"/"}>
            {" "}
            <img
              src="/logo-ico.png"
              className="w-[94px] object-contain"
              alt=""
            />
          </Link>
          <nav
            className={`flex justify-start items-start w-full xl:w-auto max-w-[450px] xl:max-w-none bg-headerBg h-full xl:h-auto pt-[6rem] overflow-y-auto xl:overflow-visible z-[90] xl:p-0 xl:items-center gap-6 sm:gap-5 xl:gap-3 xl:static fixed top-0 transition-all duration-1000 ${
              headerToggle ? "right-0" : "-right-[900px]"
            } xl:flex-row flex-col`}
          >
            <NavlinkComp
              setHeaderToggle={setHeaderToggle}
              link="/"
              name="Swap"
            />
            <NavlinkComp
              setHeaderToggle={setHeaderToggle}
              link="/pool"
              name="Pool"
            />
            <NavlinkComp
              setHeaderToggle={setHeaderToggle}
              link="/stake"
              name="Staking"
            />
            <NavlinkComp
              setHeaderToggle={setHeaderToggle}
              link="/farm"
              name="Farm"
            />
            <NavlinkComp
              setHeaderToggle={setHeaderToggle}
              link="/about"
              name="About $MANTA"
            />
            <NavlinkComp
              setHeaderToggle={setHeaderToggle}
              link="/faq"
              name="FAQ"
            />
            <button
              onClick={() => setHeaderToggle(false)}
              className="h-[40px] w-[90%] self-center bg-mirage flex md:hidden justify-center border-none items-center px-4 rounded-full"
            >
              <p className="font-bold text-sm grText uppercase">0 Manta</p>
            </button>
            <button
              onClick={() => setHeaderToggle(false)}
              className="h-[40px] w-[90%] self-center bg-mirage flex md:hidden justify-center border-none items-center px-4 rounded-full"
            >
              <p className="font-bold text-sm  grText ">Connect to Wallet</p>
            </button>
            <button className="h-[40px] absolute bottom-4 right-4 md:hidden bg-mirage flex justify-center border-none items-center px-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          </nav>
        </div>
        <div className="flex justify-start items-center gap-5">
          <button className="h-[40px] bg-mirage hidden md:flex justify-center border-none items-center px-4 rounded-full">
            <p className="font-bold text-sm grText uppercase">0 Manta</p>
          </button>
          <button className="h-[40px] bg-mirage hidden md:flex justify-center border-none items-center px-4 rounded-full">
            <p className="font-bold text-sm  grText ">Connect to Wallet</p>
          </button>
          <button className="h-[40px] md:flex bg-mirage hidden justify-center border-none items-center px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <button className="h-[40px] md:flex bg-mirage hidden justify-center border-none items-center px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button className="h-[40px] relative z-[91] xl:hidden text-white bg-mirage flex justify-center border-none items-center px-4 rounded-full">
            {headerToggle ? (
              <svg
                onClick={() => setHeaderToggle(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setHeaderToggle(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

const NavlinkComp = ({ link, name, setHeaderToggle }) => {
  return (
    <NavLink
      onClick={() => setHeaderToggle(false)}
      to={link}
      className="relative xl:w-auto w-full"
    >
      {({ isActive }) => (
        <>
          <p
            className={`${
              isActive ? "text-white  font-bold" : "text-gray font-medium"
            } pb-1 xl:w-auto w-full text-lg sm:text-left text-center xl:text-base px-5 xl:px-3`}
          >
            {name}
          </p>
          {isActive && (
            <span className="absolute top-full left-0 w-full bg-white rounded-full h-[2px]"></span>
          )}
        </>
      )}
    </NavLink>
  );
};
