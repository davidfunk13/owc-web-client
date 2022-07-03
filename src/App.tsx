import Box from "@mui/material/Box";
import DesktopDrawer from "./components/DesktopDrawer/DesktopDrawer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404/404Page";
import Home from "./pages/Home/Home";
import { FC, useEffect } from "react";
import useStyles from "./App.styles";
import { useMediaQuery } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import { theme } from "./theme/theme";
import MobileDrawer from "./components/MobileDrawer/MobileDrawer";
import navItems from "./utils/navItems";
import { selectIsAuthenticated, setIsAuthenticated, setUser } from "./app/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import AddBattletag from "./pages/AddBattletag/AddBatteltag";

interface AppProps { }

const App: FC<AppProps> = () => {
    const { classes } = useStyles();
    const { isAuthenticated, user } = useAuth0();
    const desktopDrawerBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const dispatch = useAppDispatch();
    const isAuthed = useAppSelector(selectIsAuthenticated);

    useEffect(() => {

        dispatch(setIsAuthenticated(isAuthenticated));
        dispatch(setUser(user));

        return () => {
            dispatch(setIsAuthenticated(false));
            dispatch(setUser(undefined));
        };
        
    }, [dispatch, isAuthenticated, user]);

    return (
        <BrowserRouter>
            <Box className={classes.container}>
                <NavBar />
                {isAuthed ?
                    <>
                        {desktopDrawerBreakpoint ? <DesktopDrawer /> : <MobileDrawer />}
                        <Routes>
                            <Route path={"/"} element={<Home />}></Route>
                            <Route path={"/profile/add-battletag"} element={<AddBattletag />}></Route>
                            {navItems.map(({ to, Page }, index) =>
                                <Route key={`route-${index}`} path={to} element={<Page />} />
                            )}
                            <Route path={"*"} element={<PageNotFound />} />
                        </Routes>
                    </>
                    :
                    <Unauthorized />
                }
            </Box >
        </BrowserRouter>
    );
};

export default App;