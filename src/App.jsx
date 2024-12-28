import { Flowbite } from "flowbite-react";

import { AppNavBar } from "./Components/Navbar/AppNavBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { FetchAllData } from "./Store/MovieContext";
function App() {
  const [togle, setTogle] = useState("HOME");
  useEffect(() => {
    FetchAllData();
  }, []);

  return (
    <>
      <Flowbite>
        <AppNavBar />
        <Outlet />
      </Flowbite>
    </>
  );
}

export default App;
