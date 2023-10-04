import { Link } from "react-router-dom";
export default function ArrowButton({ name, symbol, route }) {
  return (
    <Link
      to={route}
      className="px-1 transition-all flex justify-between text-xl hover:bg-indigo-500 hover:text-white"
    >
      <div className="w-fit">{name}</div>
      <div className="w-fit">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </Link>
  );
}
