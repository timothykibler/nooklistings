import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from 'react-redux-i18n'

import rootReducer from './reducers'
import locales from './locales'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

syncTranslationWithStore(store)
store.dispatch(loadTranslations(locales))

// check if user has set language before
const defaultLanguage = localStorage.getItem('defaultLanguage')
store.dispatch(setLocale(defaultLanguage || 'jp'))

export default function configureStore() {
  return store
}