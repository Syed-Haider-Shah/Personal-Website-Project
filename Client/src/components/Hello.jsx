import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import HelloPageCard from "./SmlComponents/HelloPageCard";
import { HELLOCARDS } from "../constants/hello";

//YO cardHeight is 10rem
export default function Hello() {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;
  const submit = async () => {
    try {
      await axios
        .post("http://127.0.0.1:8000/hello", {
          cookieValue,
        })
        .then((res) => {
          setName(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    submit();
  }, [cookieValue]);
  const nav = useNavigate();
  const logOut = async () => {
    Cookies.remove("email");
    await nav("/");
  };

  return (
    <div className="flex flex-col items-center h-screen gap-10">
      <section className="mt-10 flex flex-col">
        <h1 className="flex justify-center title-font md:text-4xl  text-3xl mb-4 font-medium text-gray-900">
          Hello 👋 {name}
        </h1>
        <h2 className="flex justify-center mb-8 text-gray-500 font-bold text-xl">
          Now you're logged-in, where would you like to go?
        </h2>
      </section>
      <section className="flex justify-evenly max-w-screen-lg mt-6 mb-6 flex-wrap">
        {HELLOCARDS.map((cards) => (
          <HelloPageCard
            key={cards.id}
            icon={cards.icon}
            title={cards.title}
            text={cards.text}
          />
        ))}
      </section>

      <section className="flex justify-center px-40 mt-6 mb-6">
        <button
          onClick={logOut}
          className="ml-4 text-white bg-slate border-0 py-2 px-6 focus:outline-none hover:bg-slate/80 rounded text-lg"
        >
          Log Out
        </button>
      </section>
    </div>
  );
}
