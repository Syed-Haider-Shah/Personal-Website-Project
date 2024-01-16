import { Link } from "react-router-dom";
export default function ArrowButton({ name, symbol, route }) {
  return (
    <Link
      to={route}
      className="rounded-sm px-1 transition-all flex justify-between items-center text-xl hover:bg-primary hover:font-bold hover:text-white"
    >
      <div className="w-fit text-sm">{name}</div>
      <div className="w-fit">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </Link>
  );
}
