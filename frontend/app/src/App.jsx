import { useState } from 'react'
import './App.css'
import LogIn from 'frontend/app/src/pages/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Redirect to log in */}
      <LogIn/>
    </>
  )
}

export default App
