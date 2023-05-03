"use strict";
// console.log("Olá Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando operações com Strings e realizando o parse com a
// //função parseInt...;
// console.log(parseInt(nr1)+parseInt(nr2));

// var nome1 = "Dubas";
// // let nome2 = "Serbatinho";
// // const nome3 ="Julia";
// nome = "Ale";
// console.log(nome);

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// var nome

// console.log(nome1);

/* <button value="click" id="meu-btn">Click</button> */
const btn = document.getElementById("meu-btn");

//PRIMEIRO PASSO PARA A TRANSFORMACAO DO BOTAO EM RGB

//funcao addEventListener adiciona eventos ao elemento. Pode ser usado para adicionar qualquer evento a qualquer elemento, seja um botao criado, seja um h2 titulo de uma secao
//function(){} eh uma funcao anonima
btn.addEventListener("click", function () {
    // click eh o evento esperado. Estao esta sendo adicionado o evento click. Quando alguem clicar no bota, ativara o q esta dentro da function
    //console.log(btn.textContent); // aqui estamos atribuindo que mostrarah o conteudo texto do botao criado em HTML, no caso Click.

    //random = retorna uma numero aleatorio entre 0 e 1
    //floor = arredenda o numero pra baixo
    //ceil = arredonda pra cima
    //round = arredonda aleatorio

    let r = 0,
        g = 0,
        b = 0;

    r = Math.round(Math.random() * 255); //Math eh uma classe matematica
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    this.setAttribute(
        "style",
        `background-color: rgb(${r}, ${g},${b});`);
});
