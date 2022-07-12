import { Grid } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { FC } from "react";
import IBattletag from "./types/IBattletag";

interface IBattletagTableColumns {
  row: IBattletag
}

export const RenderDetailsButton: FC<IBattletagTableColumns> = ({ row }) => {
    console.log({ row });
    return (
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"start"}
        >
            {/* action icons */}
        </Grid>
    );
};

const BattletagTableColumns = [
    {
        field: "name",
        headerName: "Name",
        minWidth: 180,
        flex: 1,
    },
    {
        field: "playerLevel",
        headerName: "Player Level",
        minWidth: 180,
        flex: 1,
    },
    {
        field: "isPublic",
        headerName: "Profile Public",
        minWidth: 180,
        flex: 1,
    },
    {
        field: "platform",
        headerName: "Platform",
        minWidth: 180,
        flex: 1,
    },
    {
        field: "portrait",
        headerName: "Portrait",
        minWidth: 180,
        flex: 1,
    },
    {
        field: "actionIcons",
        headerName: "Actions",
        sortable: false,
        minWidth: 120,
        flex: 1,
        renderCell: (row: GridRenderCellParams) => RenderDetailsButton(row)
    }
];

export default BattletagTableColumns;
