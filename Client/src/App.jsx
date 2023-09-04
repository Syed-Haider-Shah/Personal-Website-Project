import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/NavbarLog";
import Navbar1 from "./components/NavbarNLog";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Hello from "./components/Hello";
import Forget from "./components/Forget";

function App() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));

  //checks the status of cookies(whether logged in or not)
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCookieValue = Cookies.get("email");
      if (updatedCookieValue !== cookieValue) {
        setCookieValue(updatedCookieValue);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cookieValue]);

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        {cookieValue == undefined && <Navbar1 />}

        {cookieValue != undefined && <Navbar />}
        <Routes>
          {cookieValue == undefined && (
            <Route path="/login" element={<Login />} />
          )}
          {cookieValue != undefined && (
            <Route path="/login" element={<Hello />} />
          )}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
