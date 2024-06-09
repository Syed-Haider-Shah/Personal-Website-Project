import Checkbox from "./Checkbox";
export default function Card1({ heading, checklist }) {
  return (
    <div className=" drop-shadow-4 w-[30%] h-[90%] shadow-lg rounded bg-white pt-5">
      <h1 className="  drop-shadow-4 m-2 mt-5 text-xl font-bold text-primary bg-red- text-center">
        {heading}
      </h1>
      <div className="mt-10 px-12 flex flex-col items-center">
        {checklist.map((check) => (
          <Checkbox key={check} name={check} />
        ))}
      </div>
    </div>
  );
}
