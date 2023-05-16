import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardContainer from "../components/container/DashboardContainer";
import Schedule from "../pages/Schedule";
import Patient from "../pages/Patient";
import Prescription from "../pages/Prescription";
import Appointment from "../pages/Appointment";
import Payment from "../pages/Payment";
import AppointmentForm from "../pages/Appointment/AppointmentForm";
import Inventory from "../pages/Inventory";
import InventoryForm from "../pages/Inventory/InventoryForm";
import Doctors from "../pages/Doctors";
import Nurses from "../pages/Nourse";
import Departmen from "../pages/Department";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<DashboardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="patient" element={<Patient />} />
        <Route path="prescription" element={<Prescription />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="appointment/add" element={<AppointmentForm />} />
        <Route path="payment" element={<Payment />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="inventory/add" element={<InventoryForm />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="nurses" element={<Nurses />} />
        <Route path="department" element={<Departmen />} />
      </Route>
    </Routes>
  );
};

export default Router;
