import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./PageNotFound.breadcrumbs";

interface IPageNotFound { }

const PageNotFound: FC<IPageNotFound> = () => {
    return (
        <ViewProvider heading={"404 Page Not Found"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default PageNotFound;