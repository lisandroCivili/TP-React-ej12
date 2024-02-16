import { useState } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Container from 'react-bootstrap/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Titulo></Titulo>
    <Container className='border border-black'>
        <Formulario></Formulario>
    </Container>
    </>
  )
}

export default App
