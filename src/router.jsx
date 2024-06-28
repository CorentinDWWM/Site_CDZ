import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "../src/Pages/Form/Login/Login";
import Accueil from "./Pages/Accueil/Accueil";
import Register from "./Pages/Form/Register/Register";
import RGPD from "./Pages/Form/RGPD/RGPD";
import Logout from "./Pages/Logout";
import VerifyMail from "./Pages/Form/VerifyMail";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";
import ForgotPassword from "./Pages/Form/Password/ForgotPassword";
import ResetPassword from "./Pages/Form/Password/ResetPassword";
import MyAccount from "./Pages/Account/MyAccount";
import Contact from "./Pages/Contact/Contact";
import { userLoader } from "./loader/userLoader";
import Videos from "./Pages/Videos/Videos";
import Boutique from "./Pages/Boutique/Boutique";
import Produit from "./Pages/Boutique/Produit/Produit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/boutique",
        element: <Boutique />,
      },
      {
        path: "/boutique/produit",
        element: <Produit />,
      },
      // {
      //   path: "/boutique/produit/2",
      //   element: <Produit />,
      // },
      {
        path: "/contact",
        element: (
          <UserConnected>
            <Contact />
          </UserConnected>
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
        path: "/verifyMail/:token",
        element: <VerifyMail />,
      },
      {
        path: "/rgpd",
        element: <RGPD />,
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
        path: "/forgotPassword",
        element: (
          <UserNotConnected>
            <ForgotPassword />
          </UserNotConnected>
        ),
      },
      {
        path: "/resetPassword/:email",
        element: (
          <UserNotConnected>
            <ResetPassword />
          </UserNotConnected>
        ),
      },
      {
        path: "/account/:_id",
        element: (
          <UserConnected>
            <MyAccount />
          </UserConnected>
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
    ],
  },
]);
