import React from "react";
import '../../css/style.css'
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="formulario" controlId="opciones">
            <Form.Label className="categoria align-self-center fs-5">Buscar por categoria:</Form.Label>
          <Form.Select className="opciones fs-5" id="opciones" aria-label="Default select example">
            <option>Opciones</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;
