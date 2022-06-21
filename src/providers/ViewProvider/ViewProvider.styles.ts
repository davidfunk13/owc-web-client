import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "ViewProvider Styles" })((theme) => ({
    container: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(5)
    }
}));

export default useStyles;