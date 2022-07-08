import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IPageNotFound { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "404 Page Not Found",
        bold: true
    },
];

const PageNotFound: FC<IPageNotFound> = () => {
    return (
        <ViewProvider heading={"404 Page Not Found"} breadcrumbs={breadcrumbs}>
        </ViewProvider>
    );
};

export default PageNotFound;