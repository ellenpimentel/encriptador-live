const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
validarInput()

function btnEncriptar(){
    if(!validarInput()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        //mensaje.style.backgroundImage = "none"
        textArea.value = "";
    }
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
       if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
       }
    }
    console.log(stringEncriptada)
    return stringEncriptada;
}

function validarInput(){
    let palabraEscrita = document.querySelector(".text-area").value;
    let validador = palabraEscrita.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Caracteres no permitidos.")
        location.reload();
        return true;
    }
}

