import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface IHome { }

const breadcrumbs: IBreadcrumb[] = [];

const Home: FC<IHome> = () => {
    return (
        <ViewProvider heading={"Home"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Home;