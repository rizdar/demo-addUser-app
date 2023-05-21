import Button from './Button';
import Card from './Card';

export default function ErrorModal({ errors, onConfirm }) {
  return (
    <>
      <div className="w-full h-screen backdrop-blur-sm fixed" onClick={onConfirm} />
      <Card className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-95%] border-2 border-slate-300">
        <header className="bg-red-700 text-white font-bold p-3 rounded-t-md">{errors.title}</header>
        <p className="p-3 font-medium">{errors.message}</p>
        <footer className="p-3 flex justify-end">
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}
