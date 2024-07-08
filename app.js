const substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
function criptografar(texto) {
    let textoCriptografado = substituirLetras(texto);
    return textoCriptografado;
}
function substituirLetras(texto) {
    let textoCriptografado = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        if (letra in substituicoes) {
            textoCriptografado += substituicoes[letra];
        } else {
            textoCriptografado += texto[i];
        }
    }
    return textoCriptografado;
}