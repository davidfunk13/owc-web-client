import battletagSlice from "./reducers/battletag/battletagSlice";
import { combineReducers, } from "redux";
import drawerSlice from "./reducers/drawer/drawerSlice";

const rootReducer = combineReducers({
	battletag: battletagSlice,
	drawer:    drawerSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
