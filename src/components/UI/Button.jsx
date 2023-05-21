export default function Button({ children, type, onClick }) {
  return (
    <button className="px-4 py-2 rounded-md text-slate-50 font-bold bg-teal-600" type={`${type} || "button"`} onClick={onClick}>
      {children}
    </button>
  );
}
