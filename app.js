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
    if (invertido) {
        for (let chave in tabela) {
            let valor = tabela[chave];
            let regex = new RegExp(chave, "g");
            texto = texto.replace(regex, valor);
        }
        return texto;
    } else {
        let textoAlterado = '';
        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i].toLowerCase();
            if (letra in tabela) {
                textoAlterado += tabela[letra];
            } else {
                textoAlterado += texto[i];
            }
        }
        return textoAlterado;
    }
}


function exibirTextoCriptografado() {
    Ocultar();
    let textoOriginal = document.getElementById('texto').value;
    let textoCriptografado = criptografar(textoOriginal);
    document.getElementById('resultado').textContent = textoCriptografado;
}
function exibirTextoDescriptografado(){
    Ocultar();
    let textoCriptografado = document.getElementById('texto').value;
    let textoDescriptografado = descriptografar(textoCriptografado);
    document.getElementById('resultado').textContent = textoDescriptografado;
}


function Copiar(){
    var textoCopiar = document.getElementById('resultado').innerText;
    var aux = document.createElement('textarea');
    aux.value = textoCopiar;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function Ocultar(){
    document.getElementById('imagem').style.display = 'none';
    document.getElementById('descricao').style.display = 'none';
}