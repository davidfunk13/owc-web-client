import NavBar from "./components/NavBar/NavBar";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404/404Page";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";

interface AppProps { }

const App: FC<AppProps> = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/dashboard"} element={<Dashboard />}></Route>
                    <Route path={"*"} element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default App;