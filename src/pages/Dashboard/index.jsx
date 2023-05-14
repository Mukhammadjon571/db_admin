import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Item from "./components/item";
import { dash1, dash2, dash3, dash4, dashIcon } from "../../assets/images";
import { ApexChart } from "../../components/ui/Chart";
import DashItem from "./components/DashItem";

const Dashboard = () => {
  return (
    <div>
      <ContentHeader>Welcome Admin!</ContentHeader>
      <div className="grid grid-cols-4 gap-8 p-20">
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
      </div>
      <div className="grid grid-cols-4 gap-8 p-20 pt-0">
        <DashItem
          img={dash1}
          title={"Good"}
          desc={"Inventory Status"}
          button={"View Detailed Report"}
          color={"bg-[blue] text-white"}
        />
        <DashItem
          img={dash2}
          title={"273"}
          desc={"Medicines Available"}
          button={"Visit Inventory "}
          color={"bg-[green] text-white"}
        />
        <DashItem
          img={dash3}
          title={"01"}
          desc={"Medicine Shortage"}
          button={"Resolve Now "}
          color={"bg-[pink]"}
        />
        <DashItem
          img={dash4}
          title={"02"}
          desc={"Medicine Groups"}
          button={"View Groups "}
          color={"bg-[yellow]"}
        />
      </div>
      <div className="p-10 grid grid-cols-2 gap-10">
        <ApexChart />
        <ApexChart />
      </div>
    </div>
  );
};

export default Dashboard;
