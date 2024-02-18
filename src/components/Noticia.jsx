import React from 'react';
import Card from 'react-bootstrap/Card';
const Noticia = ({noticias}) => {
    return (
        <>
        {
            noticias.map((noticia, index)=>(

                <Card className='noticia text-center' key={index}>
                    <Card.Img src={noticia.image_url} className='img'></Card.Img>
                    <Card.Body className='cuerpoNoticia'>
                        <Card.Title>{noticia.title} desde {noticia.country}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <a href={noticia.source_url} className="btn btn-primary w-50 mb-3 align-self-center">Ir a la noticia</a>
                </Card>      
            )
            )
        }
        
        </>
    );
};

export default Noticia;