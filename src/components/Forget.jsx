import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "./SmlComponents/ShopContext";

export default function Forget() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const { Cookies } = useContext(ShopContext);

  //this is only a temporary storage so it can be trasported to server
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //submit sends formData to backend for verification
  const submit = async (e) => {
    e.preventDefault();

    try {
      if (!captchaValue) {
        toast.error("Fill the Captcha");
      } else {
        await axios
          .post("https://reno-server-steel.vercel.app/login", {
            formData,
          })
          .then((res) => {
            if (res.data == "loginPass") {
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
      }
    } catch (e) {
      toast.error("Somethig went wrong!2");
    }
  };

  return (
    <div className="">
      <form action="POST" method="/forget">
        <section className="text-gray-600 body-font relative grid place-items-center py-32">
          <div className="absolute inset-0 bg-gray-300"></div>

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font flex">
              <p className="pr-1 ">Forgot Password</p>
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Username or Email
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
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <input
              className="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
              value="Reset Request"
            />
            <p className="text-base mt-3">
              Back to
              <Link className="text-base text-blue-700 mt-3" to={"/login"}>
                {" "}
                log in
              </Link>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}
