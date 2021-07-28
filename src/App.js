import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import Quote from "./components/Quote.jsx";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <Quote />
    </Provider>
  );
}

export default App;
