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
import Account from "./components/Account";

function App() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));

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
            <Route path="/login" element={<Account />} />
          )}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
