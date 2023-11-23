import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import Login from "../page/Login";
import FileExplore from "../page/FileExplore";
import PrivateRoute from "../providers/PrivateRoute";
import Deshboard from "../page/Deshboard";
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
      element:<Deshboard/>
    }
])

export default router;
