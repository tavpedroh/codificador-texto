const substituicoes ={
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
};

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//exibirTextoNaTela('h',texto);
let input = document.querySelector(entrada);
let text = input.value;

function codificar(texto){
    let textoCriptografado = substituirletras(texto);
}


function criptografar(text){
    
}