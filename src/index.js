import React from "react";
import ReactDOM from "react-dom";
import{BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {Provider} from "react-redux"

import store from "./store/index";

const app = (
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById("root")
);