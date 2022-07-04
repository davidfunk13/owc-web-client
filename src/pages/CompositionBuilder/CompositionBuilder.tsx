import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface ICompositionBuilder { }

const breadcrumbs: Breadcrumb[] = [
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