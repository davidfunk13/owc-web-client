import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IHome { }

const breadcrumbs: Breadcrumb[] = [];

const Home: FC<IHome> = () => {
    return (
        <ViewProvider heading={"Home"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Home;