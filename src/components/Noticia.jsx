import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Noticia = () => {
    return (
        <>
        <Card className='noticia'>
            <Card.Img></Card.Img>
            <Card.Body className='cuerpoNoticia'>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Button>Ir a la noticia</Button>
            </Card.Body>
        </Card>      
        
        </>
    );
};

export default Noticia;