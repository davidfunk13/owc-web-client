import { Grid } from "@mui/material";
import { FC } from "react";
import ListTable from "../../components/ListTable/ListTable";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";
import BattletagSearchForm from "./BattletagSearchForm/BattletagSearchForm";
import BattletagTableColumns from "./BattletagTableColumns";

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
                    <ListTable data={[{id: 1,name:"Dave"}]} columns={BattletagTableColumns} rowCount={0} page={1} pageSize={100} isLoading={true} />
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default AddBattletag;