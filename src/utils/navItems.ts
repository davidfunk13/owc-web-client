import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import INavigationItem from "../types/IMenuItem";
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
import AddBattletag from "../pages/AddBattletag/AddBattletag";

const navItems: INavigationItem[] = [
    { name: "Home", IconComponent: HomeIcon, to: "/", Page: Home, subItems: [] },
    { name: "Dashboard", IconComponent: DashboardIcon, to: "/dashboard", Page: Dashboard, subItems: [] },
    {
        name: "Profile", IconComponent: AccountCircleIcon, to: "/profile", Page: Profile, subItems: [
            { name: "Add Battletag", to: "/profile/add-battletag", Page: AddBattletag, subItems: [] },
        ]
    },
    { name: "Heroes", IconComponent: LocalHospitalIcon, to: "/heroes", Page: Heroes, subItems: [] },
    { name: "Composition Builder", IconComponent: ConstructionIcon, to: "/composition-builder", Page: CompositionBuilder, subItems: [] },
    { name: "Hero Picker", IconComponent: CheckBoxIcon, to: "/heroes", Page: Heroes, subItems: [] },
    { name: "Maps", IconComponent: MapIcon, to: "/maps", Page: Maps, subItems: [] },
    { name: "Track Games", IconComponent: QueryStatsIcon, to: "/track-games", Page: TrackGames, subItems: [] },
    { name: "Statistics", IconComponent: DonutSmallIcon, to: "/statistics", Page: Statistics, subItems: [] },
];

export default navItems;