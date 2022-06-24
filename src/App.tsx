import Box from "@mui/material/Box";
import DesktopDrawer from "./components/DesktopDrawer/DesktopDrawer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404/404Page";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { FC } from "react";
import useStyles from "./App.styles";
import ViewProvider from "./providers/ViewProvider/ViewProvider";
import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
interface AppProps { }

const App: FC<AppProps> = () => {
    const { classes } = useStyles();
    const {isAuthenticated} = useAuth0();
    return (
        <Box className={classes.container}>
            <BrowserRouter>
                <NavBar />
                {!isAuthenticated && <ViewProvider>
                    <Typography variant={"h1"}>
                        {"Unauthorized View"}
                    </Typography>
                </ViewProvider>}
                {/* authenticated app */}
                {isAuthenticated &&
                <>
                    <DesktopDrawer />
                    <Routes>
                        <Route path={"/"} element={<Home />}></Route>
                        <Route path={"/dashboard"} element={<Dashboard />}></Route>
                        <Route path={"*"} element={<PageNotFound />} />
                    </Routes>
                </>
                }
            </BrowserRouter>
        </Box>
    );
};

export default App;