import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "./SmlComponents/ShopContext";

export default function Login() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [cookieValue, setCookieValue] = useState("");
  const [choice, setType] = useState("");
  const { Cookies } = useContext(ShopContext);
  const nav = useNavigate();

  //this is only a temporary storage so it can be trasported to server
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  //submit sends formData to backend for verification
  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://127.0.0.1:8000/login", {
          formData,
        })
        .then((res) => {
          if (res.data == "loginPass") {
            Cookies.set("email", formData.email, { expires: 7 });
            setCookieValue(Cookies.get("email")); //generating cookies
            toast.success("Successfully Logged in");
          } else if (res.data == "nouser") {
            toast.error("This email is not registered");
          } else if (res.data == "loginFail") {
            toast.error("Invalid Credentials");
          } else if (res.data == "fail") {
            toast.error("Somethig went wrong!");
          }
        })
        .catch(() => {
          toast.error("Somethig went wrong!1");
        });
    } catch (e) {
      toast.error("Somethig went wrong!2");
    }
  };
  const choiceAssigner = async () => {
    try {
      await axios
        .post("http://127.0.0.1:8000/account", {
          cookieValue,
        })
        .then((res) => {
          console.log("step1 is reached");
          setType(res.data.choice);
        })
        .catch(() => {});
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    choiceAssigner();
  }, [cookieValue]);

  useEffect(() => {
    if (choice === "provider") {
      nav("/proportal");
    } else if (choice === "contributor") {
      nav("/contributor");
    } else if (choice === "homeowner") {
      nav("/homeowner");
    }
  }, [choice]);

  return (
    <div className="">
      <form action="POST" method="/login" onSubmit={submit}>
        <section className="text-gray-600 body-font relative grid place-items-center py-32">
          <div className="absolute inset-0 bg-gray-300"></div>

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font flex">
              <p className="pr-1 ">Welcome Back</p>
              <i className="fa-regular fa-face-smile fa-bounce text-black bottom-0 "></i>{" "}
              <p className="pl-1 ">!</p>
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-homeColor focus:ring-2 focus:ring-homeColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-homeColor focus:ring-2 focus:ring-homeColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <input
              className="text-white cursor-pointer bg-homeColor border-0 py-2 px-6 focus:outline-none hover:bg-homeColor rounded text-lg"
              type="submit"
              value="Log In"
            />
            <Link to={"/forget"} className="text-base text-red-500 mt-3">
              Forgot Password?
            </Link>
            <p className="text-base mt-3">Don't have an account?</p>
            <p className="text-base text-blue-700 mt-3">
              <Link to={"/signup"}>Register New Account</Link>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}
