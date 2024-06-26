import { entityListReducer } from '@repo/ui/entityListSlice';
import { authReducer } from '@repo/ui/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import apiSlice  from './app.api';
export const store:any= configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    entityList: entityListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: apiSlice,
      },
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
