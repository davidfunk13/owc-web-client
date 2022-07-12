import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./Home.breadcrumbs";

interface IHome { }

const Home: FC<IHome> = () => {
    return (
        <ViewProvider heading={"Home"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Home;