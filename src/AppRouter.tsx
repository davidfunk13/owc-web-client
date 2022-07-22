import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import createRoutes from "./utils/createRoutes";

interface IAppRouter { }

const AppRouter: FC<IAppRouter> = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            {createRoutes()}
            <Route path={"*"} element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRouter;
