export default function SmlText({ text, size }) {
  return (
    <div className="p-4">
      <p2 className={`m-2 text-${size}xl text-white`}>{text}</p2>
    </div>
  );
}
