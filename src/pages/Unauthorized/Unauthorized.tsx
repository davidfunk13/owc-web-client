import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface IUnauthorized { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Unauthorized",
        bold: true
    },
];

const Unauthorized: FC<IUnauthorized> = () => {
    return (
        <ViewProvider heading={"Unauthorized"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Unauthorized;