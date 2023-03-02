Referência: [Back-End Web Architecture](https://www.codecademy.com/article/back-end-architecture)

### O que são clients?
Clients é qualquer coisa que envia uma requisição para o backend.

### O que é um backEnd?
O backend consiste em todas as tecnologias envolvidas no processo de receber uma requisição, gerar uma resposta e por fim enviar ao client. Geralmente existem três partes:
- **Servidor:** É onde são recebidas as requisições.
- **App:** É um componente independente que realiza funções dentro do sistema e atende as solicitações.
- **Database:** Onde são organizados os dados do sistema

### Principais funções do App
O servidor executa os apps que possuem diversas informações de como lidar com as requisições feitas. Essas solicitações são feitas com base HTTP e no [[URI]] e são chamada de rotas.
Alguns apps terão função de midleware, realizando uma ponte entre a requisição e o envio da resposta. 

### Tipos de respostas de um servidor
Existem variados tipos de respostas, um servidor poder responder um HTML, um arquivo JSON ou até um feedback com um [[Status HTTP]].

### Função de uma base de dados
A principal função de um banco de dados é justamente salvar os dados em um local. Muitas das requisições feitas pelo servidor necessitem de um banco de dados, pois clients podem requisitar informações alocadas no db ou adicionar dados.

### O que é uma API
Uma API são um conjunto de métodos bem definidos de comunicação entre diferentes partes de um software. A API possui uma coleção de endpoints e recursos que esses endpoints expõem.