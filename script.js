const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar() {
    const textoDescriptorafado = desencriptar(textArea.value);
    mensagem.value = textoDescriptorafado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodico = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat" ]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodico.length; i++) {
        if(stringEncriptada.includes(matrizCodico[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodico[i][0], matrizCodico[i][1]);

        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodico = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodico.length; i++) {
        if(stringDesencriptada.includes(matrizCodico[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodico[i][1], matrizCodico[i][0]);
        }
    }
    return stringDesencriptada;
}
