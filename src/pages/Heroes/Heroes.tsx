import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface IHeroes { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Heroes",
        bold: true
    },
];

const Heroes: FC<IHeroes> = () => {
    return (
        <ViewProvider heading={"Heroes"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Heroes;