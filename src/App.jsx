import { Flowbite } from "flowbite-react";

import { AppNavBar } from "./Components/Navbar/AppNavBar";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { FetchAllData } from "./Store/MovieContext";
function App() {
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
