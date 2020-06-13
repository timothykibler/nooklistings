import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'

import metaReducer from './metaReducer'

export default combineReducers({
  metaReducer,
  i18n: i18nReducer
})