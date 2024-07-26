import { useState } from "react"
import Example from "./components/Example";

export default function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative bg-blue-100 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-blue-100 p-10 text-center shadow-md">
        <h1 className="text-4xl font-bold text-blue-700">Tailwind no React 💙</h1>
        <p className="mt-4 text-lg text-blue-500">Clique no botão para ver alguns exemplos</p>
        <button
          onClick={() => setShow(!show)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Exemplos
        </button>
      </div>
      <div className="mt-32 p-10 overflow-y-auto">
        {show && <Example />}
      </div>
    </div>
  )
}