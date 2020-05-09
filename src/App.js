import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Routes from "./routes/index";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import { categoriesThunks } from "./state/ducks/categoriesDucks";

const App = ({ categoriesThunks }) => {
  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const getData = async () => {
      await categoriesThunks.getCategories();
    };
    getData();
  }, [categoriesThunks]);

  return <Routes />;
};

const mapDispatch = (dispatch) => ({
  categoriesThunks: bindActionCreators(categoriesThunks, dispatch),
});

export default connect(null, mapDispatch)(App);
