<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import store from './store/store.js'
import {Provider} from 'react-redux'
=======
import {Provider} from 'react-redux'
import {persistor,store} from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react'

>>>>>>> a1d13f4a563ccdec66a96cd2e6f58374ac2f2909
ReactDOM.createRoot(document.getElementById('root')).render(

>>>>>>> bb558eabe94a8631d23ae921936f2be4ecc6fffe
  <React.StrictMode>
<<<<<<< HEAD
      <Provider store={store}>
    <App />
=======
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
      </PersistGate>
>>>>>>> a1d13f4a563ccdec66a96cd2e6f58374ac2f2909
    </Provider>
  </React.StrictMode>
);
