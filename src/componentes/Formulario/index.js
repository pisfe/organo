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

  const aoSalvar = (evento) => {
    evento.preventDefault();
  };

  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>
                Preencha os dados para criar o card do colaborador
            </h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
            <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite seu imagem"></CampoTexto>
            <ListaSuspensa obrigatorio={true} itens={times}></ListaSuspensa>
            <Botao>Criar card</Botao>
        </form>
    </section>
  );
}

export default Formulario;