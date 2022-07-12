import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./Maps.breadcrumbs";

interface IMaps { }

const Maps: FC<IMaps> = () => {
    return (
        <ViewProvider heading={"Maps"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Maps;