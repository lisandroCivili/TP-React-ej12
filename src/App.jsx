import { useState } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaNoticias from './components/ListaNoticias'
import Container from 'react-bootstrap/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Titulo></Titulo>
    <Container className='border border-black'>
        <Formulario></Formulario>
        <ListaNoticias></ListaNoticias>
    </Container>
    </>
  )
}

export default App
