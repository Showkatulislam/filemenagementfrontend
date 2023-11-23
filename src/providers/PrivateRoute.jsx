import { useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import Loading from "../components/Loading";


const PrivateRoute = ({children}) => {
    const {user,loading}=UseAuth();

    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;