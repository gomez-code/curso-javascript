/* Este es un simuledor de creditos.
El usuario debe ingresar los datos solicitados para poder acceder*/

let usuario = prompt("Ingrese su usuario");
let password = "javascript";

//Esta función se encarga de verificar la contraseña
const ingreso = () => {
    let ingreso_exitoso = false;
    for(let i = 3; i > 0; i--){
        let clave_ingresada = prompt('Ingrese su clave');
        if (clave_ingresada === password ){
            alert(`Bienvenido ${usuario}`);  
            ingreso_exitoso = true
            break
        }else{
              alert ('Clave incorrecta, intente de nuevo. Tienes '+ (i - 1)+ ' intenos más')
        }
    }
 return ingreso_exitoso
}
const resultadoIngreso = ingreso();
if (resultadoIngreso) {
  console.log('Bienvenido', usuario, 'al simulador de créditos');
} else {
  console.log('Acceso denegado. Intente más tarde.');
}

//En este bucle verificamos que el usuario sea mayor de edad
let edad = parseInt(prompt('Ingrase su edad'));
let falta = 18 - edad;
if(edad >= 18){
    console.log('Estás habilitado legalmente para recibir un credito');
 }else{
        alert('Lo siento, te faltan ' + falta +' años para poder pedir un credito')
    }

// Aqui nos enfocamos en el credito
let monto = parseFloat(prompt('ingrese el monto deseado'))
let cuotas = parseInt(prompt('En cuantas cuotas lo prefiere?(3, 6 y 12 cuotas'))
let calculo = () => {
    switch(cuotas){
        case 3:
            const tres_cuotas = monto * 1.2;
            const tres_cuotasxmes = tres_cuotas / 3;
            console.log('sucuota mensual será de $',tres_cuotasxmes,' que suman $', tres_cuotas);
            break;
         case 6:
             const seis_cuotas = monto * 1.4;
             const seis_cuotasxmes = seis_cuotas / 6;
             console.log('sucuota mensual será de $',seis_cuotasxmes,' que suman $', seis_cuotas);
             break;
         case 12:
            const doce_cuotas = monto * 1.6;
            const doce_cuotasxmes = doce_cuotas / 12;
            console.log('su cuota mensual será de $',doce_cuotasxmes,' que suman $', doce_cuotas);
            break;
        default:
            alert('Debe escojer 3, 6 0 12 cuotas')
    }
    } 
    calculo();



/*let nombre = 'guille';
alert('Hola Javascript');
alert('Debe completar lo siguiente:')
let edad1 = prompt("edad");
let dni = prompt('su dni');
alert('verifique sus datos')
let arma_string = nombre +','+ 'tu edad es: '+ edad1 + ' y tu dni es: '+ dni;
console.log('DATOS PERSONALES: ', arma_string);
let confirmar_datos = confirm('Los datos son correctos?')
if (confirmar_datos){
    alert ('Bienvenido '+ nombre)
    console.log('Ya estás incripto')
 } else{ 
       alert ('Verifica los datos')
}
console.log(typeof arma_string);
*/
/*let temperatura= prompt('set temp: ');
if (temperatura >= 100){
    console.log('ideal')
}
    else if (temperatura >= 40){
    console.log('templada')
    }
    else{
    console.log('frio')
    }
caldera = confirm ('CALDERA EN MARCHA?');

for(let x = 1; x <= 10; x++){
    console.log(x)
}

for(let x = 1; x <= 10; x++){
    let resultado = x * 3;
    console.log(x + ' x 3 = ' + resultado);
}

//tiene que ir formando un codigo de color que se compone de 5 numeros. Los numeros se van ubicando en una lista. 
//Cuando complea los 5 numeros dice el color formado
//cada vez que ingresa un numero avisa que ingrese el siguiente.
let codigo = [];
for (;codigo.length < 5; ) {
  let digito = prompt('Ingrese dígito:');
  
  // Verifica si el usuario ingresó un número válido entre 0 y 9
  if (!isNaN(digito) && digito >= 0 && digito <= 9) {
    // Agrega el dígito al array
    codigo.push(Number(digito));
  } else {
    alert("Ingrese un número válido del 0 al 9.");  
  }
}
let suma = 0
for(let i = 0; i < codigo.length; i++ ){
    suma += codigo[i];
}
console.log('El codigo suma:' + suma)
console.log(codigo.slice(0 , 3));

// Mostrar el código ingresado en pantalla
console.log("Código ingresado:", codigo);
switch(suma){
    case 15:
        console.log('Color Rojo')
        break;
    case 10:
        console.log('Color AZUL')
        break; 
    case 5:
        console.log('Color BLANCO')
        break;
    default :
    console.log('ALTERNATIVA A SU SELECCIÓN: Bordó')
}
if(suma > 0 && suma <= 5 ){
    console.log('Color seleccionado: BLANCO')
}
if(suma > 5 && suma <= 10 ){
    console.log('Color seleccionado: AZUL')
}
if(suma > 10 && suma <= 15 ){
    console.log('Color seleccionado: ROJO')
}
 
let factor = prompt('Quiero saber la tabla del:')
for(let x = 0; x <= 10; x++ ){
    let resultado = x * factor;
    console.log(factor + 'x' + x + '=' + resultado)
}
*/
/*function sumar(a , b){
    let operación = a * b;
    return operación
   
}
let n1 = prompt('primer dato: ')
let n2 = prompt('primer dato: ')

console.log(sumar(n1 , n2))
*/

