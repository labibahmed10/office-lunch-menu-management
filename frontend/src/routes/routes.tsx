import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import App from "../App";
import Home from "../pages/home/Home";
import AddMenu from "../pages/addMenu/AddMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "menu-lists",
        element: <Home />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
