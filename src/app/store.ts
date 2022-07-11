import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import drawerReducer from "../features/drawer/drawerSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
import battletagReducer from "../features/battletag/battletagSlice";


const rootReducer = {
    auth: authReducer,
    battletags: battletagReducer,
    drawer: drawerReducer,
    snackbar: snackbarReducer,
    theme: themeReducer
};

export const store = configureStore({
    reducer: rootReducer
});

export const generateStoreWithInitialState = (initialState: Partial<RootState>) => configureStore({
    reducer: rootReducer,
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
