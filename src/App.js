import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Routes from './routes/index'
import firebase from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import { categoriesThunks } from './state/ducks/categoriesDucks'

const App = ({ categoriesThunks }) => {
  firebase.initializeApp(firebaseConfig)

  useEffect(() => {
    const getData = async () => {
      try {
        await categoriesThunks.getCategories()
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [categoriesThunks])

  return <Routes />
}

const mapDispatch = (dispatch) => ({
  categoriesThunks: bindActionCreators(categoriesThunks, dispatch),
})

export default connect(null, mapDispatch)(App)
