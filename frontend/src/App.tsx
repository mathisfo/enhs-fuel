import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './feature/input/Input'
import Header from './feature/header/Header'
import HistoryTable from './feature/history/HistoryTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Input />
      <HistoryTable/>
    </div>
  )
}

export default App
