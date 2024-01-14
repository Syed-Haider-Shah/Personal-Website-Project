export default function Checkbox({ name }) {
  return (
    <div className="-translate-x-8 flex justify-between py-2">
      <p1 className="text-sm px-8">{name}</p1>
      <input
        type="checkbox"
        id="checkbox"
        className="h-fit shadow-lg rounded accent-primary hover:ring-1 hover: ring-primary"
      ></input>
    </div>
  );
}
