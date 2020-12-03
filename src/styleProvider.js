import { create } from 'jss'
import rtl from 'jss-rtl'
import { useSelector } from 'react-redux'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'

import React from 'react'

const styleProvider = (props) => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
  const lang = useSelector((state) => state.app.language)
  return (
    <>
      {lang === 'he' ? (
        <StylesProvider jss={jss}>{props.children}</StylesProvider>
      ) : (
        props.children
      )}
    </>
  )
}

export default styleProvider
