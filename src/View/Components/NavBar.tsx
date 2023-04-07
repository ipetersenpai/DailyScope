import React from "react";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";

export const Navbar: React.FC = () => {
  return (
    <div className="flex bg-[#0A7FF1] max-w-full h-[50px] font-Dailyscope">
      <div className="w-[1080px] mx-auto flex flex-cols ">
        <div className="my-auto ml-4 bg-dailyscope_logo bg-contain bg-no-repeat h-10 w-[570px]" />
        <ul className="flex flex-cols space-x-7 text-white my-auto justify-end">
          <li>
            <Brightness6Icon />
          </li>
          <li className="">NEWS</li>
          <li>ENTERTAIMENT</li>
          <li>SPORTS</li>
          <li>WEATHER</li>
          <SearchIcon />
        </ul>
      </div>
    </div>
  );
};
