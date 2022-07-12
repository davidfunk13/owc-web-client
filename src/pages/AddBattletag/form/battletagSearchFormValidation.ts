import * as Yup from "yup";

const battletagSearchFormValidation = Yup.object()
    .shape({
        battletag: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required")
    });

export default battletagSearchFormValidation;