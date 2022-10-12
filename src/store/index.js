import {persistReducer, persistStore} from 'redux-persist';
import logger from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import rootSagas from './rootSagas';
import {reducer as auth} from 'store/auth/reducer';
import {reducer as user} from 'store/user/reducer';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
let middleware = [];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['auth', 'user'],
  stateReconciler: false,
};
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
// if (__DEV__) {
//   middleware.push(logger);
// }

const rootReducer = combineReducers({
  auth,
  user,
});

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSagas);

export const persistedStore = persistStore(store);

export default store;
