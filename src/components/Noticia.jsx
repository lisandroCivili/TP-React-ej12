import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Noticia = ({noticias}) => {
    return (
        <>
        {
            noticias.map((noticia, index)=>(

                <Card className='noticia' key={index}>
                    <Card.Img></Card.Img>
                    <Card.Body className='cuerpoNoticia'>
                        <Card.Title>{noticia.title}</Card.Title>
                        <Card.Text></Card.Text>
                        <Button>Ir a la noticia</Button>
                    </Card.Body>
                </Card>      
            )
            )
        }
        
        </>
    );
};

export default Noticia;