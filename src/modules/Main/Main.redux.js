import { chatReducer } from '../Chat/Chat.redux';
import { calcReducer } from '../Calc/Calc.redux';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export const getStore = () => {
  const reducers = combineReducers({
    chatReducer,
    calcReducer
  })

  const composeEnhancers =
    typeof window === 'object' &&
      process.env.NODE_ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose

  const middlewares = [
    thunk,
  ]

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}