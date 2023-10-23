export default function Checkbox({ name }) {
  return (
    <div className="flex justify-between py-2">
      <p1 className="text-xl px-8">{name}</p1>
      <input
        type="checkbox"
        id="checkbox"
        className="h-fit shadow-lg rounded accent-indigo-500 hover:ring-1 hover: ring-indigo-500"
      ></input>
    </div>
  );
}
