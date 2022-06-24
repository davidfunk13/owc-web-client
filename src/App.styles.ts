import { makeStyles } from "./utils/makeStyles";

const useStyles = makeStyles({ name: "ViewProvider Styles" })((theme) => ({
    container: { display: "flex" }
}));

export default useStyles;