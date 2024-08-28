const botonDesencriptar = document.getElementById('boton_desencriptar');

function encriptar (){
    let textoDeIngreso = '';
    textoDeIngreso = document.querySelector("#texto_ingreso").value;

    if (textoDeIngreso == '') {
        document.getElementById('imagen_no_existe').style.display = 'flex';
        document.getElementById('mensaje_no_existe_ini').style.display = 'flex';
        document.getElementById('mensaje_no_existe_fin').style.display = 'flex';
    } else {
        var texto = document.querySelector("#texto_ingreso").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".mensage_salida").value = textoCifrado;
        document.querySelector("#texto_ingreso").value;
        botonDesencriptar.removeAttribute('disabled');

        document.getElementById('imagen_no_existe').style.display = 'none';
        document.getElementById('mensaje_no_existe_ini').style.display = 'none';
        document.getElementById('mensaje_no_existe_fin').style.display = 'none';        
    }
}

var boton1 = document.querySelector("#boton_encriptar"); boton1.onclick = encriptar;

function desencriptar (){ 
    let textoDeIngreso = '';
    textoDeIngreso = document.querySelector("#texto_ingreso").value;

    if (textoDeIngreso == '') {
        document.getElementById('imagen_no_existe').style.display = 'flex';
        document.getElementById('mensaje_no_existe_ini').style.display = 'flex';
        document.getElementById('mensaje_no_existe_fin').style.display = 'flex';
    } else {
        var texto = document.querySelector("#texto_ingreso").value; 
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector(".mensage_salida").value = textoCifrado; document.querySelector("#texto_ingreso").value;    
        botonDesencriptar.disabled = true;

        document.getElementById('imagen_no_existe').style.display = 'none';
        document.getElementById('mensaje_no_existe_ini').style.display = 'none';
        document.getElementById('mensaje_no_existe_fin').style.display = 'none';      
    }
}

var boton2 = document.querySelector("#boton_desencriptar"); boton2.onclick = desencriptar;

async function copiar() {
    let textoDeSalida = '';
    textoDeSalida = document.querySelector("#texto_salida").value;

    if (textoDeSalida == '') {
        document.getElementById('imagen_no_existe').style.display = 'flex';
        document.getElementById('mensaje_no_existe_ini').style.display = 'flex';
        document.getElementById('mensaje_no_existe_fin').style.display = 'flex';
    } else {
        await navigator.clipboard.writeText(textoDeSalida);
        document.querySelector("#texto_ingreso").value = textoDeSalida;
        document.querySelector("#texto_salida").value = '';
        
        document.getElementById('imagen_no_existe').style.display = 'none';
        document.getElementById('mensaje_no_existe_ini').style.display = 'none';
        document.getElementById('mensaje_no_existe_fin').style.display = 'none'; 
    }    
}