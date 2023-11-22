import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import Login from "../page/Login";
import FileExplore from "../page/FileExplore";
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
          element:<FileExplore/>
        }
      ]
    }
])

export default router;
