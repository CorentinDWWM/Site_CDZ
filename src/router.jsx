import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "../src/components/Form/Login";
import Accueil from "./Pages/Accueil/Accueil";
import Register from "./components/Form/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
