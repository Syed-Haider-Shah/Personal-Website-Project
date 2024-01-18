import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "./SmlComponents/ShopContext";

export default function SignupCon() {
  const { Cookies } = useContext(ShopContext);
  const [captchaValue, setCaptchaValue] = useState(null);

  var nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const choice = "contributor";

  //this is also where we check the acceptable values for form, ie password and cpassword match etc
  const submit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password != formData.cpassword) {
        toast.error("Passwords are not same");
      } else if (formData.password.length < 6) {
        toast.error("Password must be atleast 6 characters");
      } else if (!captchaValue) {
        toast.error("Fill the Captcha");
      } else {
        //sending form to backend
        await axios
          .post("http://127.0.0.1:8000/signupcon", {
            formData,
            state,
            country,
            choice,
          }) //the response is retruned from server.js here
          .then((res) => {
            if (res.data == "exist") {
              toast.error("Email is already registered");
            } else if (res.data == "notexist") {
              Cookies.set("email", formData.email, { expires: 7 }); //generate cookie
              toast.success("Successfully Registered");
              nav("/contributor");
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <form action="POST" method="/signupcon" onSubmit={submit}>
        <section className="text-gray-600 body-font relative grid place-items-center py-32">
          <div className="absolute inset-0 bg-gray-300"></div>

          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              <i className="fa-regular fa-address-card text-black"></i> Join us
              as a CONTRIBUTER
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-homeColor focus:ring-2 focus:ring-homeColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
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
            <div className="relative mb-4">
              <label
                htmlFor="cpassword"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                required
                value={formData.cpassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                type="password"
                id="cpassword"
                name="cpassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-homeColor focus:ring-2 focus:ring-homeColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="country"
                className="leading-7 text-sm text-gray-600"
              >
                Country
              </label>
              <input
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                id="country"
                name="country"
                className="w-full bg-white rounded border border-gray-300 focus:border-homeColor focus:ring-2 focus:ring-homeColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State/Province
              </label>
              <input
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-homeColor focus:ring-2 focus:ring-homeColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <ReCAPTCHA
              className="py-5"
              sitekey="6LdjJfMnAAAAAJA8J2HzOhrQrocs83XUzjBA8IQp"
              onChange={(value) => setCaptchaValue(value)}
            />
            <input
              className="text-white cursor-pointer hover:shadow-lg bg-homeColor border-0 py-2 px-6 focus:outline-none hover:bg-homeColor rounded text-lg"
              type="submit"
              value="Sign me up !"
            />
            <div>
              <p className="text-base mt-3">Already have an account?</p>
              <Link className="text-base text-blue-700 mt-3" to={"/login"}>
                Log in
              </Link>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
