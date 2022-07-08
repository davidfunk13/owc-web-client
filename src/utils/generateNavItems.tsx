import NavigationItem from "../components/NavigationItem/NavigationItem";
import navItems from "./navItems";

const generateNavItems = () => 
    navItems.map(({ name, to, IconComponent, subItems }, index) =>
        <NavigationItem
            key={`nav-item-${index}-${name}`}
            subItems={subItems}
            aria-label={`${name} Navgation Link`}
            to={to}
            name={name}
            IconComponent={IconComponent}
        />
    );

export default generateNavItems;