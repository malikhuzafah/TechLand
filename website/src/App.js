import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MenuBar from "./components/MenuBar/MenuBar";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import InvestorRelations from "./pages/InvestorRelations/InvestorRelations";
import Auth from "./pages/Auth/Auth";
import axios from "axios";

function App() {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleLogin = (email, password) => {
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/api/users/login", userData)
      .then((res) => {
        localStorage.setItem("token", res.data);
        setUser(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = (email, name, password) => {
    const userData = {
      email: email,
      name: name,
      password: password,
    };
    axios
      .post("http://localhost:3001/api/users/register", userData)
      .then((res) => {
        localStorage.setItem("token", res.data);
        setUser(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <div>
        <MenuBar user={user} logout={logout} />
        <div>
          <Routes>
            <Route
              path="/auth"
              element={
                <Auth handleLogin={handleLogin} handleSignup={handleSignup} />
              }
            ></Route>
            <Route
              path="/investor-relations"
              element={<InvestorRelations />}
            ></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
