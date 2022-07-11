import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, SyntheticEvent } from "react";
import FormProvider from "../../../providers/FormProvider/FormProvider";
import battletagSearchFormValidation from "./battletagSearchFormValidation";

interface IBattletagSearchForm { }

const BattletagSearchForm: FC<IBattletagSearchForm> = () => {

    const formik = useFormik({
        initialValues: { battletag: "" },
        validationSchema: battletagSearchFormValidation,
        onSubmit: () => { console.log("yo"); }
    });

    const { values, handleChange, handleSubmit, errors } = formik;

    function handleOnSubmit(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
    }

    return (
        <FormProvider id={"battletag-search"} handleSubmit={handleOnSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
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
        </FormProvider>
    );
};

export default BattletagSearchForm;