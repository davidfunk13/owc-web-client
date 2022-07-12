import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./CompositionBuilder.breadcrumbs.";

interface ICompositionBuilder { }

const CompositionBuilder: FC<ICompositionBuilder> = () => {
    return (
        <ViewProvider heading={"Team Composition Builder"} breadcrumbs={breadcrumbs}>
          
        </ViewProvider>
    );
};

export default CompositionBuilder;