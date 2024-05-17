import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "../src/components/Form/Login";
import Accueil from "./Pages/Accueil/Accueil";
import Register from "./components/Form/Register";
import RGPD from "./components/Form/RGPD/RGPD";
import Logout from "./components/Logout";
import VerifyMail from "./components/Form/VerifyMail";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";

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
        element: (
          <UserNotConnected>
            <Login />
          </UserNotConnected>
        ),
      },
      {
        path: "/register",
        element: (
          <UserNotConnected>
            <Register />
          </UserNotConnected>
        ),
      },
      {
        path: "/logout",
        element: (
          <UserConnected>
            <Logout />
          </UserConnected>
        ),
      },
      {
        path: "/rgpd",
        element: <RGPD />,
      },
      {
        path: "/verifyMail/:token",
        element: <VerifyMail />,
      },
    ],
  },
]);
