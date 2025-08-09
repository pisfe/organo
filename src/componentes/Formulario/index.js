import React from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = () => {
  return (
    <section className='formulario'>
        <form>
            <h2>
                Preencha os dados para criar o card do colaborador
            </h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
            <CampoTexto label="Imagem" placeholder="Digite seu imagem"></CampoTexto>
        </form>
    </section>
  );
}

export default Formulario;