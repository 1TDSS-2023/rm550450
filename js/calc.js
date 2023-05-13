// Desafio 1
//inserir o value dos botoes de numeros e operacoes no visor.
//Eh obrigatorio utilizar funcoes parametrizadas.
//Pode ser utilizados eventos inline

//Desafio3 
//Evite a insercao de mais de um operadorpor vez no visor
function insereNumeroNoVisor(botao,visor) {
    
    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){

        if(visor.value[visor.value.length-1] === "+" || visor.value[visor.value.length-1] === "-" || visor.value[visor.value.length-1] === "*" || visor.value[visor.value.length-1] === "/"){
            visor.value.slice(visor.value.length-1);
        }else{
            visor.value += botao.value;
        }

    }else{
        visor.value += botao.value;
    }
}

function aparecerNoVisor(botao, visor){
    visor.value += botao.value;

}

//Desafio2
//Utilizando a funcao eval(expressao)
//Crie uma nova funcao no formato ArrowFunction que receba um parametro e passe para a funcao eval() realizar o calculo e devolva o rsultado no visor

const calculaResultadoOperacoes = (visor) => {
    visor.value = eval(visor.value);
}

