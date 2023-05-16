import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Item from "./components/item";
import {
  dash1,
  dash2,
  dash3,
  dash4,
  dashIcon,
  deleted,
  edit,
} from "../../assets/images";
import { ApexChart } from "../../components/ui/Chart";
import DashItem from "./components/DashItem";

const Dashboard = () => {
  return (
    <div>
      <ContentHeader>Welcome Admin!</ContentHeader>
      <div className="grid grid-cols-4 gap-8 p-20 pb-10">
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
      <div className="grid grid-cols-4 gap-8 p-20 pt-0 pb-10">
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
      <div className="flex justify-stretch gap-6 w-full p-20 pt-0">
        {/* Item */}
        <div className="grow bg-white flex-1">
          <div className="flex justify-between p-3">
            <span className="">Inventory </span>{" "}
            <span className="ml-auto">Go to Configuration {">>"} </span>
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <div className="flex flex-col gap-2 flex-1">
              <div className="text-2xl font-bold">273</div>
              <p>Total no of Medicines</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="text-2xl font-bold">27</div>
              <p>Medicine Groups</p>
            </div>
          </div>
        </div>
        {/* /Item */}
        {/* Item */}
        <div className="grow bg-white flex-1">
          <div className="flex justify-between p-3">
            <span className="">My Pharmacy </span>{" "}
            <span className="ml-auto">Go to User Management {">>"} </span>
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <div className="flex flex-col gap-2 flex-1">
              <div className="text-2xl font-bold">273</div>
              <p>Total no of Suppliers</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="text-2xl font-bold">27</div>
              <p>Frequently bought items</p>
            </div>
          </div>
        </div>
        {/* /Item */}
      </div>
      <div className="p-20 pt-0">
        <table className="border w-full bg-white" border>
          <tr className="border-b">
            <th className="border-l p-5">Group Name </th>
            <th className="border-l p-5">No of Medicine </th>
            <th className="border-l p-5">Action </th>
          </tr>
          {Array(12)
            .fill("")
            .map((i) => (
              <tr className="border-b">
                <th className="border-l p-5">Generic Medicine</th>
                <th className="border-l p-5">02</th>
                <th className="border-l p-5">View Full Detail {">>"}</th>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
