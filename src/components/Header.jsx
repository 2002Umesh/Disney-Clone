import React, { useState } from "react";
import { HiHomeModern } from "react-icons/hi2";
import { LiaSearchengin } from "react-icons/lia";
import { FaUserSecret } from "react-icons/fa6";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdMovieFilter } from "react-icons/md";
import { MdSportsVolleyball } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
function Header() {
    const [show,setShow]=useState(false)
  return (
    <div className=" grid md:grid-cols-2  h-full md:h-screen w-20 md:w-30 p-2 ">
      <div className="">
        <img
          className="pb-3 md:pb-8 ml-3"
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          alt="logo"
        />
        <div
          className="flex space-x-4 md:space-x-0 md:block  md:pt-5 pl-5 md:pl-0"
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          <NavLink to="/Login">
            {" "}
            <FaUserSecret className="cursor-pointer  md:mb-5 md:pb-6 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
          <NavLink to="/">
            {" "}
            <HiHomeModern className="cursor-pointer md:mb-5 md:pb-6 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
          <NavLink to="/Search">
            <LiaSearchengin className="cursor-pointer md:mb-5 md:pb-6 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
          <NavLink to="/Movies">
            {" "}
            <MdMovieFilter className="cursor-pointer md:mb-5  md:pb-6 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
          <NavLink to="/Tv">
            <PiTelevisionSimpleFill className="cursor-pointer gap-2 md:mb-5 md:pb-6 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
          <NavLink to="/Sports">
            <MdSportsVolleyball className="cursor-pointer  md:pb-6 md:mb-5 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
          <NavLink to="/Category">
            <MdCategory className="cursor-pointer  md:pb-6 hover:scale-110 transition-all duration-150 ease-in-out size-6 md:size-11" />
          </NavLink>
        </div>
      </div>
      {show && (
        <Fade>
          <div className="hidden md:block absolute  bg-opacity-40 font-bold  z-20 w-28 h-full text-xl text-slate-300 pl-2">
            <h4 className="cursor-pointer mt-[75px] ">My Space</h4>
            <h4 className="cursor-pointer mt-[34px]">Home</h4>
            <h4 className="cursor-pointer mt-[35px]">Search</h4>
            <h4 className="cursor-pointer mt-[35px]">Movies</h4>
            <h4 className="cursor-pointer mt-[35px]">TV</h4>
            <h4 className="cursor-pointer mt-[37px]">Sports</h4>
            <h4 className="cursor-pointer mt-[35px]">Category</h4>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default Header;
