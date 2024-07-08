const substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
const substituicoesInvertidas = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};


function criptografar(texto) {
    return substituirLetras(texto,substituicoes);
}
function descriptografar(texto) {
    return substituirLetras(texto,substituicoesInvertidas,true);
}


function substituirLetras(texto, tabela, invertido = false) {
    let textoCriptografado = '';
    if(invertido){
        for(let chave in tabela){
            let valor = tabela[chave];
            let regex = new RegExp(chave,'g');
            texto = texto.replace(regex.valor);
        }
        return texto;
    } else {
        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i].toLowerCase();
            if (letra in tabela) {
                textoCriptografado += tabela[letra];
            } else {
                textoCriptografado += texto[i];
            }
        }
        return textoCriptografado;
    }
}


function exibirTextoCriptografado() {
    let textoOriginal = document.getElementById('textoOriginal').value;
    let textoCriptografado = criptografar(textoOriginal);
    let elementoTextoCriptografado = document.getElementById('textoCriptografado');
    elementoTextoCriptografado.innerText = textoCriptografado;
    Ocultar();
}
function exibirTextoDescriptografado(){
    let textoCriptografado = document.getElementById('textoOriginal').value;
    let TextoDescriptografado = descriptografar(textoCriptografado);
    let elementoTextoDescriptografado = document.getElementById('textoDescriptografado');
    elementoTextoDescriptografado.innerText = TextoDescriptografado;
    Ocultar();
}




function Copiar(){
    var textoCopiar = document.getElementById('textoCriptografado').innerText;
    var aux = document.createElement('textarea');
    aux.value = textoCopiar;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
}

function Ocultar(){
    document.getElementById('imagem').style.display = 'none';
    document.getElementById('descricao').style.display = 'none';
}