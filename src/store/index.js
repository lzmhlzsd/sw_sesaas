import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'

// const devTools = require('./../libs/remote-redux-devtools.js').default

export default function configStore () {
  // const store = createStore(rootReducer, compose(devTools({
  //   hostname: 'localhost',
  //   port: 5678,
  //   secure: false
  // } ), applyMiddleware( promiseMiddleware ) ) )

  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}
