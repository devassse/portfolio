import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
