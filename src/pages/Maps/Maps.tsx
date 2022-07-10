import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface IMaps { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Maps",
        bold: true
    },
];

const Maps: FC<IMaps> = () => {
    return (
        <ViewProvider heading={"Maps"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Maps;