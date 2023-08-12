"use client";

import {BiSearch} from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
    border-[1px]
    w-full
    md:w-auto
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
    "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div
          className="hidden sm:block 
        text-sm font-semibold
        px-6 border-x-[1px]
        flex-1 text-center"
        >
          Any Week
        </div>
        <div
          className="hidden sm:block 
        text-sm font-semibold
        px-6 border-x-[1px]
        flex-1 text-center"
        >
          Any Week
        </div>
        <div
          className="flex flex-row items-center gap-3
          text-gray-600 text-sm pl-6 pr-2"
        >
           <div className="hidden sm:block">Add Guests</div>
           <div className="rounded-full bg-rose-500
            text-white p-2">
              <BiSearch size={18}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
