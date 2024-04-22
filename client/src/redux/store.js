import { configureStore,combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import outputReducer from "./output/outputSlice";

const rootReducer = combineReducers({
  auth : authReducer,
  output : outputReducer,
});

const persistConfig = {
  key : 'root',
  version : 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export const persistor = persistStore(store);