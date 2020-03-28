/* Alerta dos campos de identificação*/



/* Função de checar se é imagem ou não o arquivo*/
function Checkfiles(){
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
        alert("Apenas arquivos JPEG e PNG são permitidos");
    }
}

