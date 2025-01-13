import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} path="/" element={<Home />} />
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Login />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
