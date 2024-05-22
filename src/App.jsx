import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Welcome  React_registration_Form
    <Form/>
    </>
  )
}

export default App
