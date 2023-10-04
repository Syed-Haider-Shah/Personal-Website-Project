import { Link } from "react-router-dom";
export default function ArrowButton({ name, symbol, route }) {
  return (
    <Link
      to={route}
      className="px-1 transition-all flex justify-between  hover:bg-indigo-700 hover:text-white"
    >
      <div className="w-fit">{name}</div>
      <div className="w-fit">
        <i className={symbol}></i>
      </div>
    </Link>
  );
}
