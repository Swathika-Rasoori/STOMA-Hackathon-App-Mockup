import { createBrowserRouter } from "react-router";
import { Splash } from "@/app/screens/Splash";
import { Login } from "@/app/screens/Login";
import { Register } from "@/app/screens/Register";
import { Dashboard } from "@/app/screens/Dashboard";
import { PlantDetail } from "@/app/screens/PlantDetail";
import { Settings } from "@/app/screens/Settings";
import { Profile } from "@/app/screens/Profile";
import { About } from "@/app/screens/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/plant-detail",
    element: <PlantDetail />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
