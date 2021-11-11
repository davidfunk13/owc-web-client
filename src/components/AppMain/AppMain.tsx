import React, { FC } from "react";
import { Outlet } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";

interface IAppMainProps {

}

const AppMain: FC<IAppMainProps> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default AppMain;