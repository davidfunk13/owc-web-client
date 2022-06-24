import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "LoginButton Styles" })((theme) => ({
    buttonText: {
        color: theme.palette.common.white,
        border: `1px solid ${theme.palette.common.white}`
    }
}));

export default useStyles;