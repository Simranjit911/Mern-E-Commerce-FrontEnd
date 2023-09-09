import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserContext } from "./UserContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContext>
      <BrowserRouter>
        <App />
        <Toaster position="top-center" reverseOrder={false} duration="1500" />
      </BrowserRouter>
    </UserContext>
  </Provider>
);
