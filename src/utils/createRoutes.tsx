import { Route } from "react-router-dom";
import INavigationItem from "../types/INavigationItem";
import navItems from "./navItems";


const createRoutes = () => {
    let routes: Pick<INavigationItem, "to" | "Page">[] = [];

    navItems.map(item => {
        const { subItems, ...rest } = item;

        routes.push(rest);

        return subItems.map(subItem => {
            const { subItems, ...rest } = subItem;

            return routes.push(rest);
        });
    });

    return routes.map(({ to, Page }, index) => <Route key={`route-${index}`} path={to} element={<Page />} />);
};

export default createRoutes;