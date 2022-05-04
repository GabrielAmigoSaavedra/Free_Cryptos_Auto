var paginas = [
  "coinfaucet.io/",
  "free-doge.com/",
  "free-ltc.com/",
  "free-tron.com/",
  "freebinancecoin.com/",
  "freebitcoin.io/",
  "freecardano.com/",
  "freechainlink.io/",
  "freedash.io/",
  "freeethereum.com/",
  "freenem.com/",
  "freeneo.io/",
  "freeshibainu.com/",
  "freesteam.io/",
  "freetether.com/",
  "freeusdcoin.com/",
  "freepancake.com/"
];
var codigos = [
	//"c5bi36ymfq",
"o9pwx7p1zh","622i1z2pzm",
  "q5rlm6ot3r",
  "ykxlvmg9ja",
  "vmuph8j0c6",
  "d8fmqxjlma",
  "55khv20st4",
  "rjnmzjs673",
  "ki2r0jq5r0",
  "4obq1i3idd"

];

var textPromo = "promotion/";
 
//abre ventanas

var ventana = window.open;

//abrirPaginas(textPromo + agregarCodigo());

//abrirPaginas("referral-program");



abrirPaginasConCodigosDiarios(); 

function abrirPaginas(enlaceConTextoPromo) {
  //
  for (var i = 0; i < paginas.length; i = i + 1) {
    ventana(enlacePagina(i) + enlaceConTextoPromo);
  }
}

function enlacePagina(i) {
  return "https://" + paginas[i];
}

function abrirPaginasConCodigosDiarios() {
  //abre paginas con los codigos en el vector
  for (var i = 0; i < codigos.length; i = i + 1){
    abrirPaginas(textPromo+codigos[i])
  }
} 
function agregarCodigo() {
  return agregarCodigo = prompt("Ingrese código promocional");
}

