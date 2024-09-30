import React from "react";
import Template from "./Template";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <Template />
    </Provider>
  );
}

export default App;
