import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar.jsx";
import UpdateProfile from "./Pages/UpdateProfile.jsx";
import { ToastContainer } from "react-toastify";
import CreatePost from "./Pages/CreatePost.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} path="/" element={<Home />} />
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Login />} />
          <Route path="profile" element={<UpdateProfile />} />
          <Route path="createpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
