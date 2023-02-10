import { RiNotification4Fill, RiMessage3Fill } from "react-icons/ri";
import Image from "next/image";
import { Burger } from "public";

const Banner = () => {
  return (
    <div className="banner">
      <div className="px-mainP ">
        <div className="py-5 flex justify-between s">
          <div className="banner--navbar w-50">
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="banner--user flex items-center">
            <RiNotification4Fill size={25} />
            <RiMessage3Fill size={25} />
            <div className="w-10 h-10 rounded-full bg-pink-300 mx-2"></div>
            <div className="user-info">
              <span>Jeremicah Licup</span>
            </div>
          </div>
        </div>

        <div className="banner--show flex ">
          <div className="imag w-60 bg-banner rounded-3xl h-80 bg-center bg-no-repeat flex px-10">
            <div className="self-center ">
              <span className="text-red-200">Sample text here </span>
              <h1 className="text-title text-orange-800 font-bold">
                Find the best recipes
              </h1>
              <button
                type="button"
                class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-8 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900"
              >
                Check Menu
              </button>
            </div>
          </div>
          <div className="bg-dirty w-30 rounded-3xl mx-auto h-72 self-end flex justify-center">
            <div className="text-center">
              <Image src={Burger} alt="Burger" className=" -mt-10" />
              <span>50% off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
