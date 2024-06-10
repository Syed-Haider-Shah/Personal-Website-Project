import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from 'react-router-dom';
import { ShopContextProvider } from './components/SmlComponents/ShopContext.jsx';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ShopContextProvider>
);
