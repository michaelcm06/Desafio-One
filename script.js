// Función para encriptar el texto
function encriptar() {
    const inputText = document.getElementById('inputText').value;
    if (!validarTexto(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    let encriptado = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(encriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    if (!validarTexto(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    let desencriptado = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(desencriptado);
}

// Validar texto
function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
}

// Mostrar resultado
function mostrarResultado(resultado) {
    const outputDiv = document.getElementById('outputText');
    if (resultado.trim() === '') {
        outputDiv.textContent = 'Ningún mensaje fue encontrado\nIngresa el texto que deseas encriptar o desencriptar.';
        outputDiv.classList.add('empty');
    } else {
        outputDiv.textContent = resultado;
        outputDiv.classList.remove('empty');
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const outputDiv = document.getElementById('outputText');
    const textToCopy = outputDiv.textContent;
    if (textToCopy === 'Ningún mensaje fue encontrado\nIngresa el texto que deseas encriptar o desencriptar.' || textToCopy.trim() === '') {
        alert('No hay texto para copiar.');
        return;
    }
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles.');
    }).catch(err => {
        alert('Error al copiar el texto: ' + err);
    });
}
