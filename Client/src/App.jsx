import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/NavbarLog";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Hello from "./components/Hello";
import Forget from "./components/Forget";

import Selector from "./components/SelectorPage";
import SignupCon from "./components/SignupCon";
import SignupHO from "./components/SignupHO";
import SignupPro from "./components/SignupPro";
import ProPortal from "./components/ProPortal";
import ConPortal from "./components/ConPortal";
import ProviderPage from "./components/ProviderPage";
import AboutUs from "./components/Pages/About us";

function App() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");
  const [choice, setType] = useState("");

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

  const submit = async () => {
    try {
      await axios
        .post("http://127.0.0.1:8000/account", {
          cookieValue,
        })
        .then((res) => {
          setName(res.data.name);
          setType(res.data.choice);
        })
        .catch(() => {});
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    submit();
  }, [cookieValue]);

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />

        <Routes>
          {cookieValue == undefined && (
            <Route path="/login" element={<Login />} />
          )}
          {choice == "provider" && (
            <Route path="/login" element={<ProPortal />} />
          )}
          {choice == "contributor" && (
            <Route path="/login" element={<ConPortal />} />
          )}
          {choice == "homeowner" && <Route path="/login" element={<Hello />} />}
          {cookieValue == undefined && (
            <Route path="/signup" element={<Selector />} />
          )}
          {cookieValue == undefined && (
            <Route path="/signupho" element={<SignupHO />} />
          )}
          {cookieValue != undefined && (
            <Route path="/signupho" element={<Hello />} />
          )}
          {cookieValue == undefined && (
            <Route path="/signupcon" element={<SignupCon />} />
          )}
          {cookieValue != undefined && (
            <Route path="/signupcon" element={<ConPortal />} />
          )}
          {cookieValue == undefined && (
            <Route path="/signuppro" element={<SignupPro />} />
          )}
          {cookieValue != undefined && (
            <Route path="/signuppro" element={<ProPortal />} />
          )}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/providerpage" element={<ProviderPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
