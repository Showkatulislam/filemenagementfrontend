import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import Login from "../page/Login";
import FileExplore from "../page/FileExplore";
import PrivateRoute from "../providers/PrivateRoute";
import Deshboard from "../Layout/Deshboard";
import DeshboardHome from "../page/DeshboardHome";
import AdminProvider from "../providers/AdminProvider";
import AllFile from "../components/AllFile";
const router = createBrowserRouter([
    {
      path: "",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<App/>
        },
        {
          path:'/login',
          element:<Login/>
        },{
          path:'/file',
          element:<PrivateRoute><FileExplore/></PrivateRoute>
        }
      ]
    },{
      path:"/deshboard",
      element:<AdminProvider><Deshboard/></AdminProvider>,
      children:[
        {
          path:'',
          element:<DeshboardHome/>
        },{
          path:'all/:id',
          element:<AllFile/>
        }
      ]
    }
])

export default router;
