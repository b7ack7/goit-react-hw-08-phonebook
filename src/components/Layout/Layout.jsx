import { Suspense } from "react";
import { Outlet } from "react-router-dom"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from "components/AppBar";
import { Loader } from "components/Loader";
import { Container } from "./Layout.styled";

export const Layout = () => {
    return (
        <Container>
          <AppBar/>
          <main>
          <ToastContainer theme="colored" />
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
          </main>
        </Container>
    )
}