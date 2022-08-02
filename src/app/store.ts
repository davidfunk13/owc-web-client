import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import drawerReducer from "../features/drawer/drawerSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
import { api } from "../services/api";
import selectedBattletagReducer from "../features/selectedBattletag/selectedBattletagSlice";

const rootReducer = {
    auth: authReducer,
    drawer: drawerReducer,
    snackbar: snackbarReducer,
    theme: themeReducer,
    selectedBattletag: selectedBattletagReducer,
    [api.reducerPath]: api.reducer,
};


export const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(api.middleware),
});

export const generateStoreWithInitialState = (initialState: Partial<RootState>) => configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(api.middleware),
    preloadedState: initialState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
