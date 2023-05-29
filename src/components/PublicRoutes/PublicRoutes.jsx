import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "store/selectors";



export const PublicRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to="/contacts"/>
    }
   return children;
}