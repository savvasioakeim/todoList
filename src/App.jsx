import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
const deigma = [
  { id: 1, text: "psonia", isActive: false },
  { id: 2, text: "douleia", isActive: false },
  { id: 3, text: "programmatismo", isActive: true },
  { id: 4, text: "sunenteuksh", isActive: false },
  { id: 5, text: "douleia", isActive: false }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList arr={deigma} />
    </>
  )
}

export default App
