import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "ViewProvider Styles" })((theme) => ({
    container: {
        padding:theme.spacing(3),
        flexGrow: 1, 
    },
    breadcrumbPadding: { paddingLeft: `${theme.spacing(3)} !important`, }
}));

export default useStyles;