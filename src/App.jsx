import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import ItemDisplay from "./components/ItemDisplay";
import Cart from "./components/Cart";
import ProfileKeys from "./components/ProfileKeys";
import { ShopContextProvider } from "./components/SmlComponents/ShopContext";

//for my info, react router doesnt directly catch all URLs, it only catches teh default domain, so i gotta setup a catch all in order to access path directly
//hash router is bad for seo, only use this if i cant figure out the other way
function App() {
  return (
    <ShopContextProvider>
      
        <div className="font-cusFont bg-gray-100">
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
            <Route path="/itemdisplay" element={<ItemDisplay />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profilekeys" element={<ProfileKeys />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
    </ShopContextProvider>
  );
}

export default App;
