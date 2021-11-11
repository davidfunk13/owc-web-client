import { combineReducers, } from "redux";
import battletagSlice from "./reducers/battletag/battletagSlice";

const rootReducer = combineReducers({
    battletag: battletagSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;