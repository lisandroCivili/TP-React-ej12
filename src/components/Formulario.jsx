import React, { useState, useEffect } from "react";
import "../../css/style.css";
import Form from "react-bootstrap/Form";
import ListaNoticias from '../components/ListaNoticias'

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    if (categoriaSeleccionada) {
      consultaAPI(categoriaSeleccionada);
    }
  }, [categoriaSeleccionada]);

  const consultaAPI = async (categoria) => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_383106b29fec3add65073c97deb872177ce66&q=${categoria}&language=es&size=3`
      );
      const datos = await respuesta.json();
      setNoticias(datos.results);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  const handleChangeSelect = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
  };

  return (
    <section>
      <Form>
        <Form.Group className="formulario" controlId="opciones">
          <Form.Label className="categoria align-self-center fs-5">
            Buscar por categoría:
          </Form.Label>
          <Form.Select
            className="opciones fs-5"
            id="opciones"
            aria-label="Default select example"
            onChange={handleChangeSelect}
          >
            <option value="">Opciones</option>
            <option value="Futbol">Fútbol</option>
            <option value="Politica">Política</option>
            <option value="Policiales">Policiales</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </section>
  );
};

export default Formulario;
