import React from "react";
import { userImage } from "../assets/images";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen p-8 pt-20 w-[320px] flex flex-col gap-4 sticky top-0">
      <img src={userImage} className="mx-auto mb-6" alt="" />
      <div className="text-2xl flex flex-col gap-4">
        <NavLink
          to={"/dashboard/"}
          className="border-b border-white text-orange"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/dashboard/prescription"}
          className="border-b border-white text-orange"
        >
          Prescription List
        </NavLink>
        <NavLink
          to={"/dashboard/payment"}
          className="border-b border-white text-orange"
        >
          Payment List
        </NavLink>
        <NavLink
          to={"/dashboard/appointment"}
          className="border-b border-white text-orange"
        >
          Appointment List
        </NavLink>
        <NavLink
          to={"/dashboard/prescription"}
          className="border-b border-white text-orange"
        >
          Employee List
        </NavLink>
        <NavLink
          to={"/dashboard/prescription"}
          className="border-b border-white text-orange"
        >
          Inventory List
        </NavLink>
        <NavLink
          to={"/dashboard/payment"}
          className="border-b border-white text-orange"
        >
          Department List
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
