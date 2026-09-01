import { Header } from "./Headeer"
import { Footer } from "./Footer"
import{Outlet}from "react-router-dom"
import { ScrollButtons } from "../pages/Scrollbtn"
export const Applayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
            <ScrollButtons/>
        </>
    )
}