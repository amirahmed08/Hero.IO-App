import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installation from '../Pages/Installation/Installation';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        loader:()=>fetch('/appsData.json'),
        path:"/",
        Component: Home,
      },
      {
        path:"/allApps",
        loader:()=>fetch('/appsData.json'),
        Component:AllApps,
      },
      {
        path:"/appDetails/:id",
        loader:()=>fetch('/appsData.json'),
        Component:AppDetails,
      },
      {
        path:"/installation",
        loader:()=>fetch('/appsData.json'),
        Component:Installation,
      }
    ]
  },
]);
