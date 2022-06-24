import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { FC } from "react";
import useStyles from "./LoginButton.styles";

interface LoginButtonProps { }

const LoginButton: FC<LoginButtonProps> = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { classes } = useStyles();

    const handleLogin = () => loginWithRedirect();
    const handleLogout = () => logout({ returnTo: window.location.origin });

    return (
        isAuthenticated ?
            <Button onClick={handleLogout} variant={"outlined"} aria-label={"Logout Button"} className={classes.buttonText}>
                {"Logout"}
            </Button>
            :
            <Button className={classes.buttonText} variant={"outlined"} aria-label={"Login Button"} onClick={handleLogin}>
                {"Log In"}
            </Button>


    );
};

export default LoginButton;