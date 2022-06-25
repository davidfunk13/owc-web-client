import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";

interface INavigationItem {
    name: string,
    IconComponent?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
    to: string
    Page: FC
}

export default INavigationItem;
