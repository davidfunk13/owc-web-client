import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FC, SyntheticEvent } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import * as Yup from "yup";

interface IAddBattletag { }

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
        onSubmit: () => { console.log("yo");}
    });
    const { values, handleChange, handleSubmit, errors } = formik;

    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Add Battletag"}
            </Typography>
            <Grid component={"form"} onSubmit={(e: SyntheticEvent)=>{
                e.preventDefault();
                handleSubmit();
            }
            } id={"battletag-search"}>
                <TextField
                    helperText={errors.battletag}
                    error={!!errors.battletag}
                    id={"battletag-search-input"}
                    label={"Battletag"}
                    name={"battletag"}
                    value={values.battletag}
                    onChange={handleChange}
                />
                <Button type={"submit"}>{"Submit"}</Button>
            </Grid>
        </ViewProvider>
    );
};

export default AddBattletag;