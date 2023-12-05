import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import Login from "../Pages/Login";

import Register from "../Pages/Register";
const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App/>,
	  children: [
		{path: "/",element:<Home/>},
		{path: "/post-job",element: <CreateJob/>},
        {path:"/login",element:<Login/>},
		{path:"/sign-up",element:<Register/>}
	  ]
	},
  ]);
  export default router