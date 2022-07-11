import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { FC, ReactElement, ReactNode, SyntheticEvent } from "react";
import ariaLabelFromId from "../../utils/ariaLabelFromId";

interface IFormProvider {
    id: string
    handleSubmit: (e: SyntheticEvent<Element, Event>) => void
    children: ReactElement | ReactNode | JSX.Element
    loading?: boolean
    disabled?: boolean
}

const FormProvider: FC<IFormProvider> = ({ id, handleSubmit, children, loading, disabled }) => {

    return (
        <Box
            id={id}
            role={"form"}
            component={"form"}
            onSubmit={handleSubmit}
            aria-label={ariaLabelFromId(id)}
        >
            {children}

           
        </Box>
    );
};

export default FormProvider;