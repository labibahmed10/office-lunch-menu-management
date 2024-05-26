import { NavbarComponent } from "./components/Header/Navbar";
import { SignIn } from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
      <NavbarComponent />
      <section className="w-screen h-[calc(100vh-72px)] flex justify-center items-center">
        <SignIn />
      </section>
    </>
  );
}

export default App;
