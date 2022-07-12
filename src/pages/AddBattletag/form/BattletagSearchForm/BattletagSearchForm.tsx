import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import FormProvider from "../../../../providers/FormProvider/FormProvider";
import battletagSearchFormValidation from "../battletagSearchFormValidation";

interface IBattletagSearchForm {
    onSubmit: (value: string) => void
    loading?: boolean
}

const BattletagSearchForm: FC<IBattletagSearchForm> = ({ onSubmit, loading }) => {

    const formik = useFormik({
        initialValues: { battletag: "" },
        validationSchema: battletagSearchFormValidation,
        onSubmit: (values) => onSubmit(values.battletag)
    });

    const { values, handleChange, handleSubmit, errors } = formik;

    return (
        <FormProvider id={"battletag-search"} handleSubmit={handleSubmit}>
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
                        loading={loading}
                        disabled={loading}
                    >
                        {"Submit"}
                    </LoadingButton>
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default BattletagSearchForm;