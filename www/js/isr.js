//salario
var salario;
var exento;
var subsidio;
var impRet;
var tope;
//educativos
var rfcEd;
var montoEd;
//deducciones
var totalDeducciones=0;
var deduccion;
var rfcDe;
var desc;
var nombre;

function salario(){
//obteniendo los valores
salario=document.getElementById("salario");
exento=document.getElementById("exento");
subsidio=document.getElementById("subsidio");
impRet=document.getElementById("retenido");
tope= 0.10*(salario.value);
nombre=document.getElementById("name");

//asignando a variables de sesion
sessionStorage.setItem('valorUno',salario.value);
sessionStorage.setItem('valorDos',exento.value);
sessionStorage.setItem('valorTres',subsidio.value);
sessionStorage.setItem('valorCuatro',impRet.value);
sessionStorage.setItem('user',nombre.value);

//imprimiendo al final para rectificar
document.getElementById("uno").innerHTML = salario.value;
document.getElementById("dos").innerHTML = exento.value;
document.getElementById("tres").innerHTML = subsidio.value;
document.getElementById("cuatro").innerHTML = impRet.value;
document.getElementById("nueve").innerHTML = tope;

}

function pagosEducativos(){

rfcEd=document.getElementById("rfcEd");
montoEd=document.getElementById("montoEd");
//asignando valores de sessionStorage
sessionStorage.setItem('valorCinco',montoEd.value);
//rectificando
document.getElementById("cinco").innerHTML = rfcEd.value;
document.getElementById("seis").innerHTML = montoEd.value;
}

function deducciones(){

deduccion=document.getElementById("montoDe");


//variables de sessionStorage<.....................................revisar
sessionStorage.setItem('valorSeis',deduccion.value);

//rectificando
document.getElementById("ocho").innerHTML = deduccion.value;


}

function generar(){
  //datos ingresados
  //var us= sessionStorage.getItem('user');
  var a= sessionStorage.getItem('valorUno');
  var b= sessionStorage.getItem('valorDos');
  var m= sessionStorage.getItem('valorTres');
  var o= sessionStorage.getItem('valorCuatro');
  var e= sessionStorage.getItem('valorCinco');
  var d= sessionStorage.getItem('valorSeis');
  //datos a calcular
  var c= a-b;
  var f= c-d-e;

  var limInf;
  var porc;
  var cuota;

  //hallar limites Inferiores SAT---------------------------------------------
  if (f >0.01 && f<5952.84){
    limInf=0.01;
    porc=0.0192;
    cuota=0;
  }else if (f >5952.85 && f<50524.92) {
    limInf=5952.85;
    porc=0.0640;
    cuota=114.29;
  }
  else if (f>50524.93 && f<88793.04) {
    limInf=50524;
    porc=0.1088;
    cuota=2966.91;
  }
  else if (f>88793.05 && f<103218) {
    limInf=88793.05;
    porc=0.16;
    cuota=7130.48;
  }
  else if (f>103218.01 && f<123580.20) {
    limInf=103218.01;
    porc=0.1792;
    cuota=9438.47;
  }
  else if (f>123580.21 && f<249243.48) {
    limInf=123580.21;
    porc=0.2136;
    cuota=13087.37;
  }
  else if (f>249243.49 && f<392841.96) {
    limInf=249243.49;
    porc=0.2352;
    cuota=39929.05;
  }
  else if (f>392841.97 && f<750000) {
    limInf=392841.97;
    porc=0.30;
    cuota=73703.41;
  }
  else if (f>750000.01 && f<1000000) {
    limInf=750000.01;
    porc=0.32;
    cuota=180850.82;
  }
  else if (f>1000000.01 && f<3000000) {
    limInf=1000000.01;
    porc=0.34;
    cuota=260850.81;
  }
  else if (f>3000000.01) {
    limInf=3000000.01;
    porc=0.35;
    cuota=940850.81;
  }
//hallar limites Inferiores SAT-----------------------------------------------------

  var h=f-limInf;//Excedente del LIM inf
  var j= h*porc; //Impuesto Marginal
  var l=j+cuota; //ISR Determinado
  var n=l-m;//ISR Causado
  var p=o-n;

  var result;
  if(p>0){
    result="Favorable";
  }else {
    result="Negativo";
  }




  //impresión en la cedula
  //document.getElementById("name").innerHTML = us;//nombre del usuario
  document.getElementById("a").innerHTML = a;//ingresos salario
  document.getElementById("b").innerHTML = b;//-ingresos exentos
  document.getElementById("c").innerHTML = c;//=Ingresos Acumulador
  document.getElementById("e").innerHTML = e;//-Pago Servicios Escolares
  document.getElementById("d").innerHTML = d;//-Deducciones personales
  document.getElementById("f").innerHTML = f;//=BaseISR
  document.getElementById("g").innerHTML = limInf;//-Limite Inferior
document.getElementById("h").innerHTML = h;//=Excendente
  document.getElementById("i").innerHTML = porc;//*porcentaje del lim inf
  document.getElementById("j").innerHTML =j; //=Impuesto Marginal
  document.getElementById("k").innerHTML = cuota;//+cuota
  document.getElementById("l").innerHTML =l; //=ISR Det
  document.getElementById("m").innerHTML = m;//-Subsidio
document.getElementById("n").innerHTML =n; //=ISR Causado
  document.getElementById("o").innerHTML = o;//-Impuesto Retenido

    document.getElementById("p").innerHTML = p.toFixed(2);;//-ISR del ejercicio
document.getElementById("q").innerHTML = result;


}
