import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { load, save } from "redux-localstorage-simple";
import { isTestEnv } from "utils/env";

import connection from "./connection/reducer";
import user from "./user/reducer";
import wallets from "./wallets/reducer";

const PERSISTED_KEYS: string[] = ["user"];

const makeStore = () =>
  configureStore({
    reducer: {
      user,
      connection,
      wallets,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: true }).concat(
        save({ states: PERSISTED_KEYS, debounce: 1000 })
      ),
    preloadedState: load({
      states: PERSISTED_KEYS,
      disableWarnings: isTestEnv(),
    }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
