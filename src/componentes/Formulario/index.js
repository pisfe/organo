import React from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

  const times = [
    'Programação',
    'Front',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  return (
    <section className='formulario'>
        <form>
            <h2>
                Preencha os dados para criar o card do colaborador
            </h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
            <CampoTexto label="Imagem" placeholder="Digite seu imagem"></CampoTexto>
            <ListaSuspensa itens={times}></ListaSuspensa>
            <Botao>Criar card</Botao>
        </form>
    </section>
  );
}

export default Formulario;