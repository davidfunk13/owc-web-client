import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface HeroesProps { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "Heroes",
        bold: true
    },
];

const Heroes: FC<HeroesProps> = () => {
    return (
        <ViewProvider heading={"Heroes"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Heroes;