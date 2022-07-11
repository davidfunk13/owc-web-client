import { Grid } from "@mui/material";
import { FC } from "react";
import BattletagCard from "../../components/BatttletagCard/BattletagCard";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";
import BattletagSearchForm from "./BattletagSearchForm/BattletagSearchForm";
import IBattletag from "../../types/IBattletag";

interface IAddBattletag { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Profile",
        linkPath: "/profile"
    },
    {
        name: "Add Battletag",
        linkPath: "/profile/add-battletag",
        bold: true
    }
];

const AddBattletag: FC<IAddBattletag> = () => {

    return (
        <ViewProvider heading={"Add Battletag"} breadcrumbs={breadcrumbs}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BattletagSearchForm />
                </Grid>
                <Grid item xs={12} style={{ minHeight: "20rem" }}>
                    <BattletagCard battletag={{} as IBattletag} />
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default AddBattletag;