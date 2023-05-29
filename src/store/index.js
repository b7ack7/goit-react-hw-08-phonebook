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
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./authSlice";


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }

export const store = configureStore({
    reducer: {
      contacts: contactReducer,
      filter: filterReducer,
      auth: persistReducer(persistConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);