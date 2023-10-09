import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TestButton = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    // körs första gången komponenten renderas
    // passar bra för att göra ett API anrop här
    console.log('useeffect []');
  }, [])

  useEffect( () => {
    // körs första gången komponenten renderas
    // körs varje gång data uppdateras
    console.log('useeffect [data]');
  }, [data])

  const getData = async () => {
  }

  return (
    <div>
      {data}
      <button onClick={() => setData(true)}>Tryck</button>
    </div>
  )
}


function App() {

  return (
    <div>
      <TestButton />
    </div>
  )
}

export default App
