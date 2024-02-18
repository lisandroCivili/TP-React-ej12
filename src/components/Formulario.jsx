import React, { useState, useEffect } from "react";
import "../../css/style.css";
import Form from "react-bootstrap/Form";
import ListaNoticias from "../components/ListaNoticias";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  useEffect(() => {
    if (categoriaSeleccionada && paisSeleccionado) {
      consultaAPI(categoriaSeleccionada,paisSeleccionado);
    }
  }, [categoriaSeleccionada, paisSeleccionado]);

  const consultaAPI = async (categoria, pais) => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_383106b29fec3add65073c97deb872177ce66&q=${categoria}&language=es&size=3&country=${pais}`
      );
      const datos = await respuesta.json();
      setNoticias(datos.results);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  const recibirCategoria = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
  };
  const recibirPais = (e) => {
    const pais = e.target.value;
    setPaisSeleccionado(pais);
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
            onChange={recibirCategoria}
          >
            <option value="">Opciones</option>
            <option value="Futbol">Fútbol</option>
            <option value="Politica">Política</option>
            <option value="Policiales">Policiales</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="formulario" controlId="paises">
          <Form.Label className="pais align-self-center fs-5">
            Seleecione el país:
          </Form.Label>
          <Form.Select
            className="paises fs-5"
            id="paises"
            aria-label="Default select example"
            onChange={recibirPais}
          >
            <option value="">Opciones</option>
            <option value="ar">Argentina</option>
            <option value="bo">Bolivia</option>
            <option value="br">Brazil</option>
            <option value="cl">Chile</option>
            <option value="cn">China</option>
            <option value="es">España</option>
            <option value="us">Estados Unidos</option>
            <option value="sv">El Salvador</option>
            <option value="iq">Iraq</option>
            <option value="pe">Perú</option>

          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </section>
  );
};

export default Formulario;
