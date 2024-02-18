import { useState, useEffect } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Container from 'react-bootstrap/Container'

function App() {

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
