import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./components/Header/Navbar";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <>
      <NavbarComponent />
      <section className="flex gap-3 w-full">
        <SideBar />
        <Outlet />
      </section>
    </>
  );
}

export default App;
