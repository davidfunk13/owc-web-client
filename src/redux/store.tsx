import { Action, ThunkAction, configureStore, } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, } from "react-redux";
import rootReducer, { RootState, } from "./rootReducer";

export const store = configureStore({
	reducer:    rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

