import DashboardIcon from "@mui/icons-material/Dashboard";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import INavigationItem from "../types/INavigationItem";
import Dashboard from "../pages/Dashboard/Dashboard";
import Heroes from "../pages/Heroes/Heroes";
import Maps from "../pages/Maps/Maps";
import TrackGames from "../pages/TrackGames/TrackGames";
import Statistics from "../pages/Statistics/Statistics";
import { Person } from "@mui/icons-material";
import Profile from "../pages/Profile/Profile";

const navItems: INavigationItem[] = [
    { name: "Dashboard", IconComponent: DashboardIcon, to: "/dashboard", Page: Dashboard },
    { name: "Profile", IconComponent: FlashOnIcon, to: "/profile", Page: Profile },
    { name: "Heroes", IconComponent: FlashOnIcon, to: "/heroes", Page: Heroes },
    { name: "Team Builder", IconComponent: FlashOnIcon, to: "/heroes", Page: Heroes },
    { name: "Hero Picker", IconComponent: Person, to: "/heroes", Page: Heroes },
    { name: "Maps", IconComponent: AddLocationAltIcon, to: "/maps", Page: Maps },
    { name: "Track Games", IconComponent: TimelineIcon, to: "/track-games", Page: TrackGames },
    { name: "Statistics", IconComponent: QueryStatsIcon, to: "/statistics", Page: Statistics},
];

export default navItems;