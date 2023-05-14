import React from "react";

const DashItem = ({ img, title, desc, color, button }) => {
  return (
    <div className="flex flex-col gap-1 pt-3 bg-white items-center">
      <img src={img} alt="" />
      <h1 className="text-xl font-medium">{title}</h1>
      <p>{desc}</p>
      <button className={`${color} w-full py-2 text-center`}>{button}</button>
    </div>
  );
};

export default DashItem;
