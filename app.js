const substituicoes ={
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
};
/*
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let input = document.querySelector(entrada);
let texto = input.value;
*/
function criptografar(texto){
    let textoCriptografado = substituirletras(texto);
    return textoCriptografado;
}

function substituirletras(texto){
    let textoCriptografado = '';
    for(let i=0;i<texto.length;i++){
        let letra = texto[i].tolowercase();
        if(letra in substituicoes) 
            textoCriptografado += substituicoes[letra];
        else 
            textoCriptografado +=texto[i];
    }
    return textoCriptografado;
}

//<input type="text" id="textoOriginal" class="inicio__texto">