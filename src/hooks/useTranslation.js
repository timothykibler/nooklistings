import React from 'react'
import { useSelector } from 'react-redux'

function useTranslation() {

  const locale = useSelector(state => state.i18n.locale)
  const translations = useSelector(state => state.i18n.translations)

  return [translations[locale], locale]
}

export default useTranslation