import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { FormikBag } from "formik";
import { FC, ReactElement, ReactNode, SyntheticEvent } from "react";
import ariaLabelFromId from "../../utils/ariaLabelFromId";

interface IFormProvider {
    id: string
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
    children: ReactElement | ReactNode | JSX.Element
    loading?: boolean
    disabled?: boolean
}

const FormProvider: FC<IFormProvider> = ({ id, handleSubmit, children, loading, disabled }) => {

    function handleOnSubmit(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
    }

    return (
        <Box
            id={id}
            role={"form"}
            component={"form"}
            onSubmit={handleOnSubmit}
            aria-label={ariaLabelFromId(id)}
        >
            {children}

           
        </Box>
    );
};

export default FormProvider;