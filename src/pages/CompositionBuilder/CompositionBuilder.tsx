import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface ICompositionBuilder { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Team Composition Builder",
        bold: true
    },
];

const CompositionBuilder: FC<ICompositionBuilder> = () => {
    return (
        <ViewProvider heading={"Team Composition Builder"} breadcrumbs={breadcrumbs}>
          
        </ViewProvider>
    );
};

export default CompositionBuilder;