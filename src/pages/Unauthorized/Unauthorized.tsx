import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./Unauthorized.breadcrumbs";

interface IUnauthorized { 
    
}

const Unauthorized: FC<IUnauthorized> = () => {
    return (
        <ViewProvider heading={"Welcome"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Unauthorized;