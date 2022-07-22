import { useMediaQuery } from "@mui/material";
import { FC } from "react";
import { theme } from "../../theme/theme";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

interface IAppMenu { }

const AppMenu: FC<IAppMenu> = () => {
    const desktopMenuBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

    return desktopMenuBreakpoint ? <DesktopMenu /> : <MobileMenu />;
};

export default AppMenu;
