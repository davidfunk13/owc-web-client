import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IMaps { }

const breadcrumbs: Breadcrumb[] = [
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