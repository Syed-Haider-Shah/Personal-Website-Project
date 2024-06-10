import { Routes, Route, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "./constants/routes.jsx"
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


//hash router is bad for seo, but react is already bad at seo
function App() {
  const routes = useRoutes([
    { path: "/proportal", element: <ProPortal /> },
    { path: "/login", element: <Login /> },
    { path: "/contributor", element: <ConPortal /> },
    { path: "/homeowner", element: <Hello /> },
    { path: "/signup", element: <Selector /> },
    { path: "/signupho", element: <SignupHO /> },
    { path: "/signupcon", element: <SignupCon /> },
    { path: "/signuppro", element: <SignupPro /> },
    { path:"/", element: <Home /> },
    { path: "/profile", element: <Profile />},
    { path: "/forget", element: <Forget /> },
    { path: "/slider", element: <ImageSlider /> },
    { path: "/providerpage", element: <ProviderPage /> },
    { path: "/itemdisplay", element: <ItemDisplay /> },
    { path: "/cart", element: <Cart /> },
    { path: "/profilekeys", element: <ProfileKeys /> },
  ])
  
  return (
        <div className="font-cusFont bg-gray-100">
          <ToastContainer />
          <Navbar />  
          {routes}
          <Footer />
        </div>
  );
}

export default App;
