import Checkbox from "./Checkbox";
export default function Card1({ heading, checklist }) {
  return (
    <div className=" w-[30%] shadow-lg rounded bg-white pt-5">
      <h1 className="m-2 mt-5 text-2xl font-bold text-primary bg-red- text-center">
        {heading}
      </h1>
      <div className="mt-10 px-12 ">
        {checklist.map((check) => (
          <Checkbox key={check} name={check} />
        ))}
      </div>
    </div>
  );
}
