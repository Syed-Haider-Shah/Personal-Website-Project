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
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/proportal" element={<ProPortal />} />
          <Route path="/contributor" element={<ConPortal />} />
          <Route path="/homeowner" element={<Hello />} />
          <Route path="/signup" element={<Selector />} />
          <Route path="/signupho" element={<SignupHO />} />
          <Route path="/signupcon" element={<SignupCon />} />
          <Route path="/signuppro" element={<SignupPro />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/slider" element={<ImageSlider />} />
          <Route path="/providerpage" element={<ProviderPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
