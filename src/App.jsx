import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import { Layout } from "components/Layout";
import { fetchCurrentUser } from "store/operations";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "components/PublicRoutes";
import { selectIsRefreshing } from "store/selectors";

const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/RegisterPage"));
const Login = lazy(() => import("pages/LoginPage"));
const Contacts = lazy(() => import("pages/ContactsPage"));


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (  
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/register" element={
            <PublicRoute><Register/></PublicRoute>
          }/>
          <Route path="/login" element={
            <PublicRoute><Login/></PublicRoute>
          }/>
          <Route path="/contacts" element={
            <PrivateRoute><Contacts/></PrivateRoute>
          }/> 
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>)
);
};