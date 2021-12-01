import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
// import checkoutReducer from "./checkoutRedux";

const persistConfig = {
  key: "root",
  version: "1",
  storage,
};


const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
    reducer: {
      cart: cartReducer,
      user: persistedReducer,
      // checkout: checkoutReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
export let persistor = persistStore(store);
