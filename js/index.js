var fs
var pdf = require('html-pdf');
var html = fs.readFileSync('index.html', 'utf8');

var tituloObra = "";
var autor = "Frontino Vieira dos Santos";
var nRegistro = "";


/* selecione a pasta em questão  */
var select =document.getElementById('pastaSelect');
var value = select.options[select.selectedIndex].value;
console.log(value);


var conteudo = `


`


pdf.create("Registro do HPSP", {}).toFile("./fichadeidentificação.pdf", (err, res) => {
    if(err){
        console.log("Um erro ocorreu: (");
    }else{
        console.log(res);
    }
})
