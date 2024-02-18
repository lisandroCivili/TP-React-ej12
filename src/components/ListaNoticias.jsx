import React from 'react';
import Noticia from '../components/Noticia'
const ListaNoticias = ({noticias}) => {
    return (
        <section className='noticias'>
           <Noticia noticias={noticias}></Noticia>
        </section>
    );
};

export default ListaNoticias;