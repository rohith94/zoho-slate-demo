import './App.css'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      <div>

        <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWNuaWZmcHdsbXQ5NzVqZW45NGZsaXJxczRjb3p1eXlnaGNnbmtzdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HUkOv6BNWc1HO/giphy.gif"
        alt="Victory Meme"
        className="rounded-lg w-full max-w-sm"
      />
      </div>

      <div>
        <img src="https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzoho.743e5bb8.png&w=256&q=75" />

      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Skywalker says ! count is {count}
        </button>
       
      </div>
    </>
  )
}

export default App
