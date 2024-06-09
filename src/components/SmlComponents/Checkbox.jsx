export default function Checkbox({ name }) {
  return (
    <div className="w-72 flex justify-between py-2">
      <p className="text-xs">{name}</p>
      <input
        type="checkbox"
        id="checkbox"
        className="cursor-pointer h-fit shadow-lg rounded accent-primary hover:ring-1 hover: ring-primary"
      ></input>
    </div>
  );
}
