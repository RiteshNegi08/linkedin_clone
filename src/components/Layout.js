import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";
import Section from "./Section";
function Layout(){
    return(
    <>
    <Header/>
    <Section/>
    <Outlet/>
    <Footer/>
    </>
    )
}
export default Layout