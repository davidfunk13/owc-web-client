import Box from "@mui/material/Box";
import DesktopDrawer from "./components/DesktopDrawer/DesktopDrawer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import { FC, useEffect } from "react";
import useStyles from "./App.styles";
import { useMediaQuery } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import { theme } from "./theme/theme";
import MobileDrawer from "./components/MobileDrawer/MobileDrawer";
import { selectIsAuthenticated, selectToken, selectUser, setIsAuthenticated, setToken, setUser } from "./features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import createRoutes from "./utils/createRoutes";

interface AppProps { }

const App: FC<AppProps> = () => {
    const { classes } = useStyles();
    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const desktopDrawerBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const dispatch = useAppDispatch();
    const isAuthed = useAppSelector(selectIsAuthenticated);
    const token = useAppSelector(selectToken);
    const localUser = useAppSelector(selectUser);
    console.log(user);
    useEffect(()=>{
        if(isAuthenticated && !localUser){
            dispatch(setIsAuthenticated(isAuthenticated));
            dispatch(setUser(user));
        }
    },[dispatch, isAuthed, isAuthenticated, localUser, user]);
    
    useEffect(()=>{
        if(!token && isAuthenticated){
            getAccessTokenSilently()
                .then(token => dispatch(setToken(token)));
        }    
    },[dispatch, getAccessTokenSilently, isAuthenticated, token]);

    return (
        <BrowserRouter>
            <Box className={classes.container}>
                <NavBar />
                {isAuthenticated ?
                    <>
                        {desktopDrawerBreakpoint ? <DesktopDrawer /> : <MobileDrawer />}
                        <Routes>
                            <Route path={"/"} element={<Home />} />
                            {createRoutes()}
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