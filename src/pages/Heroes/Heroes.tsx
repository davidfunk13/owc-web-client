import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./Heroes.breadcrumbs";

interface IHeroes { }

const Heroes: FC<IHeroes> = () => {
    return (
        <ViewProvider heading={"Heroes"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Heroes;