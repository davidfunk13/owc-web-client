import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface PageNotFoundProps { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "404 Page Not Found",
        bold: true
    },
];

const PageNotFound: FC<PageNotFoundProps> = () => {
    return (
        <ViewProvider heading={"404 Page Not Found"} breadcrumbs={breadcrumbs}>
        </ViewProvider>
    );
};

export default PageNotFound;