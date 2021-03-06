import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import App from "./app/App"
import { createStore } from "./app/store/createStore"
import { Provider } from "react-redux"

const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
