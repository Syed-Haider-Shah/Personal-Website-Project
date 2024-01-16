export default function SmlText({ text, size }) {
  return (
    <div className="p-4">
      <p className={`drop-shadow-2  m-2 text-${size}xl text-white`}>{text}</p>
    </div>
  );
}
