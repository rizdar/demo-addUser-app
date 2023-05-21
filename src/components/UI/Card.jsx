export default function Card({ children, className }) {
  return <div className={`${className} bg-slate-100 w-1/2 mx-auto mt-8 rounded-md`}>{children}</div>;
}
