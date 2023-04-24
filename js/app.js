// Variables
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDecencriptar = document.querySelector(".btnDecencriptar");
const resultado = document.querySelector('.resultado');
const validar = document.querySelector('.validar');
const textoInput = document.querySelector("#texto");

// Funciones
function encriptarTexto() {
    const texto = textoInput.value;
    if (removerAcentos(texto)) {
        return;
    }
    let textoEncriptado = texto.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');
    mostrarHTML(textoEncriptado);
    textoInput.value = '';
}

function removerAcentos(texto) {
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        mostrarError(`Ingrese un texto sin acentos`);
        return true;
    };
    if (texto !== texto.toLowerCase()) {
        mostrarError('Ingrese un texto en minúsculas');
        return true;
    };
    return false;
}

function mostrarHTML(textoEncriptado) {
    resultado.innerHTML = `
        <textarea>${textoEncriptado}</textarea>
        <button class="btnCopiar">Copiar</button>
    `;
    const btnCopiar = document.querySelector('.btnCopiar');
    btnCopiar.addEventListener('click', copiarTexto);
}

function copiarTexto() {
    const textoEncriptado = resultado.querySelector('textarea');
    textoEncriptado.select();
    document.execCommand('copy');
}

function decencriptarTexto() {
    let texto = textoInput.value.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    mostrarHTML(textoEncriptado);
    textoInput.value = '';
}

function mostrarError(mensaje) {
    const alerta = document.createElement('div');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta', 'error');
    validar.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// Eventos
btnEncriptar.addEventListener('click', encriptarTexto);
btnDecencriptar.addEventListener('click', decencriptarTexto);
