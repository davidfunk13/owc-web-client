import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface HomeProps { }

const breadcrumbs: Breadcrumb[] = [];

const Home: FC<HomeProps> = () => {
    return (
        <ViewProvider heading={"Home"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Home;