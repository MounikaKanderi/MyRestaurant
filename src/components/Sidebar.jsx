import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { FaProductHunt, FaAngleRight, FaArrowRight } from "react-icons/fa";

function Sidebar() {
    return (
        <>
            <div className="sidebar fixed top-0 left-0 z-[100] w-[15%] h-screen bg-gray-100">
                <Link to="/">
                    <div className="logoWrapper py-1 px-5 w-15">
                        <img src={logo} className="w-full" alt="Logo" />
                    </div>
                </Link>
                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>

                <div className="w-100 flex items-center justify-center">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <FaProductHunt /> </span>Products
                    <span className="arrow mx-auto w-[25px] h-[25px]"><FaArrowRight /> </span>
                    </Button>
                </div>

                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>

                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>

                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>

                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>

                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>

                <div className="sidebarTabs px-7 w-100 ">
                    <Button variant="text" color="primary"><span className="icon w-[25px] h-[25px] flex items-center justify-center">
                    <MdOutlineDashboard /> </span>Dashboard
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
