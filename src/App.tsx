import Box from "@mui/material/Box";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppRouter from "./AppRouter";
import AppMenu from "./components/AppMenu/AppMenu";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import { selectToken, setToken } from "./features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
interface AppProps { }

const App: FC<AppProps> = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const token = useAppSelector(selectToken);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuthenticated && !token) {
            getAccessTokenSilently().then(token => dispatch(setToken(token)));
        }
        
    }, [dispatch, getAccessTokenSilently, isAuthenticated, token]);

    return (
        <Box>
            <NavBar />
            <BrowserRouter>
                {isAuthenticated && token ?
                    <Box>
                        <AppMenu />
                        <AppRouter />
                    </Box>
                    :
                    <Unauthorized />
                }
            </BrowserRouter>
        </Box >
    );
};

export default App;