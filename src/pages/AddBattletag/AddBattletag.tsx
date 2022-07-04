import { Box, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, SyntheticEvent } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import * as Yup from "yup";
import { Breadcrumb } from "../../types/IBreadcrumb";

import { LoadingButton } from "@mui/lab";

interface IAddBattletag { }

const breadcrumbs: Breadcrumb[] = [
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

const battletagSearchSchema = Yup.object()
    .shape({
        battletag: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required")
    });

const AddBattletag: FC<IAddBattletag> = () => {

    const formik = useFormik({
        initialValues: { battletag: "" },
        validationSchema: battletagSearchSchema,
        onSubmit: () => { console.log("yo"); }
    });

    const { values, handleChange, handleSubmit, errors } = formik;

    function handleOnSubmit(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
    }

    return (
        <ViewProvider heading={"Add Battletag"} breadcrumbs={breadcrumbs}>
            <Grid item xs={12}>
                <Grid item xs={12} component={"form"} onSubmit={handleOnSubmit} id={"battletag-search"}>
                    <TextField
                        helperText={errors.battletag}
                        error={!!errors.battletag}
                        id={"battletag-search-input"}
                        label={"Battletag"}
                        name={"battletag"}
                        value={values.battletag}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>

                    <LoadingButton
                        form={"battletag-search"}
                        variant={"contained"}
                        size={"large"}
                        type={"submit"}
                        loading={false}
                        disabled={false}
                    >
                        {"Submit"}
                    </LoadingButton>
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default AddBattletag;