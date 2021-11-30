import { combineReducers } from 'redux'
import loginReducer from 'Containers/Login/reducer'
export default function createReducer() {
  return combineReducers({
    login: loginReducer,
  })
}
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import rootSaga from './sagas'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'pocketResult',
  storage,
  blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, createReducer())
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const sagaMiddleware = createSagaMiddleware()
const enhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware),
)
export default (initialState = {}) => {
  let store = createStore(persistedReducer, initialState, enhancers)
  let persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
