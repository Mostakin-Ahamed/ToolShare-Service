import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import MyServices from "../Pages/MyServices";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService";
import MySchedules from "../Pages/MySchedules";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('categories.json')
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader: ()=> fetch('categories.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/myServices',
          element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
        },
        {
          path:'/addService',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/mySchedules',
          element:<PrivateRoute><MySchedules></MySchedules></PrivateRoute>
        }

      ]

    },
  ]);

  export default router;