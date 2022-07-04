import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface UnauthorizedProps { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "Unauthorized",
        bold: true
    },
];

const Unauthorized: FC<UnauthorizedProps> = () => {
    return (
        <ViewProvider heading={"Unauthorized"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};
export default Unauthorized;