import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Login from "./User-auth/Login";
import CreateAccount from "./User-auth/CreateAccount";
import Header from "./Header/HeaderComponent";
import EmailMaster from "./Master/EmailMaster";
import MachineMaster from "./Master/MachineMaster";
import DashBoard from "./Dashboard/DashBoard";
import ScreenAcess from "./Screen/ScreenAcess";
import Report from "./Report/Report";
import UserDetail from "./User-auth/UserDetail";
import ForgotPassword from "./User-auth/ForgotPassword";

// Theme Configuration
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
      <Header  />     

        <Routes>
          {/* Exact path for Login */}
          <Route path="/" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="userDetail" element={<UserDetail />} />
          {/* <Route path="headerComponent" element={<HeaderComponent />} /> */}
          <Route path="emailMaster" element={<EmailMaster />} />
          <Route path="machineMaster" element={<MachineMaster />} />
          <Route path="dashBoard" element={<DashBoard />} />
          <Route path="screenAcess" element={<ScreenAcess />} />
          <Route path="report" element={<Report />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
