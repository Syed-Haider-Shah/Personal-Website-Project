import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Hello from "../components/Hello";
import Forget from "../components/Forget";
import Selector from "../components/SelectorPage";
import SignupCon from "../components/SignupCon";
import SignupHO from "../components/SignupHO";
import SignupPro from "../components/SignupPro";
import ProPortal from "../components/ProPortal";
import ConPortal from "../components/ConPortal";
import ProviderPage from "../components/ProviderPage";
import ImageSlider from "../components/ImageSlider";
import ItemDisplay from "../components/ItemDisplay";
import Cart from "../components/Cart";
import ProfileKeys from "../components/ProfileKeys";

export const ROUTES = [
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
];
