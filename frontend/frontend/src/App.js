import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout";
import AddEmployee from "./Modules/AddEmployee";
import EmployeeList from "./Modules/EmployeeList";
import UpdateEmployee from "./Modules/UpdateEmployee";
import SearchEmployee from './Search/SearchEmployees';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<EmployeeList />} />
        <Route path="/employee" element={<AddEmployee />} />
        <Route path="/employee/:id" element={<UpdateEmployee />} />
        <Route path="/employee" element={<SearchEmployee />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
