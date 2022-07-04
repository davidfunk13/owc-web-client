import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import INavigationItem from "../types/INavigationItem";
import Dashboard from "../pages/Dashboard/Dashboard";
import Heroes from "../pages/Heroes/Heroes";
import Maps from "../pages/Maps/Maps";
import TrackGames from "../pages/TrackGames/TrackGames";
import Statistics from "../pages/Statistics/Statistics";
import Profile from "../pages/Profile/Profile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MapIcon from "@mui/icons-material/Map";
import ConstructionIcon from "@mui/icons-material/Construction";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import CompositionBuilder from "../pages/CompositionBuilder/CompositionBuilder";
import { Home as HomeIcon } from "@mui/icons-material";
import Home from "../pages/Home/Home";

const navItems: INavigationItem[] = [
    { name: "Home", IconComponent: HomeIcon, to: "/", Page: Home },
    { name: "Dashboard", IconComponent: DashboardIcon, to: "/dashboard", Page: Dashboard },
    { name: "Profile", IconComponent: AccountCircleIcon, to: "/profile", Page: Profile },
    { name: "Heroes", IconComponent: LocalHospitalIcon, to: "/heroes", Page: Heroes },
    { name: "Composition Builder", IconComponent: ConstructionIcon, to: "/composition-builder", Page: CompositionBuilder },
    { name: "Hero Picker", IconComponent: CheckBoxIcon, to: "/heroes", Page: Heroes },
    { name: "Maps", IconComponent: MapIcon, to: "/maps", Page: Maps },
    { name: "Track Games", IconComponent: QueryStatsIcon, to: "/track-games", Page: TrackGames },
    { name: "Statistics", IconComponent: DonutSmallIcon, to: "/statistics", Page: Statistics },
];

export default navItems;