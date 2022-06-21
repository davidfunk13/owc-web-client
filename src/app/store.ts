import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import drawerReducer from './features/drawer/drawerSlice';
import snackbarReducer from './features/snackbar/snackbarSlice';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drawer: drawerReducer,
    snackbar: snackbarReducer,
    theme: themeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
