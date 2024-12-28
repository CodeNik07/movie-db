import { DarkThemeToggle, Navbar } from "flowbite-react";
import AppLogo from "../../assets/logo.svg";
import React from "react";
import { useNavigate } from "react-router";

export const AppNavBar = () => {
  let navigate = useNavigate();

  return (
    <Navbar
      fluid
      className="bg-primary-100 text-primary-800 dark:bg-primary-900"
    >
      <Navbar.Brand onClick={() => navigate("/")} className="cursor-pointer">
        <img src={AppLogo} className="mr-3 h-6 sm:h-6" alt="Movie-DB Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white dark:bg-primary-900">
          Movie - DB
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};
