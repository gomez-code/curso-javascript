/* Este es un simuledor de creditos.
El usuario debe ingresar los datos solicitados para poder acceder*/

/*let usuario = prompt("Ingrese su usuario");
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
*/







/*

// Datos de acceso
const usuarioValido = "CODERHOUSE";
const contraseñaValida = "javascript";

// Función para verificar si el usuario y contraseña son válidos
function verificarCredenciales(usuario, contraseña) {
  return usuario === usuarioValido && contraseña === contraseñaValida;
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const fechaNacimientoArray = fechaNacimiento.split("/");
  const fechaNacimientoDate = new Date(
    fechaNacimientoArray[2],
    fechaNacimientoArray[1] - 1,
    fechaNacimientoArray[0]
  );
  let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();
  const mesNacimiento = fechaNacimientoDate.getMonth();
  const diaNacimiento = fechaNacimientoDate.getDate();

  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }

  return edad;
}

// Función para calcular el monto total a pagar en cuotas
function calcularMontoTotal(monto, cuotas) {
  const interesesPorCuota = [0, 0.22, 0.22, 0.22, 0.33, 0.33, 0.33, 0.44, 0.44, 0.44, 0.44];
  const interes = interesesPorCuota[cuotas];
  return monto * (1 + interes);
}

// Función para calcular el valor de cada cuota
function calcularValorCuota(monto, cuotas) {
  return calcularMontoTotal(monto, cuotas) / cuotas;
}

// Función para generar fechas de pago en base a la cantidad de cuotas
function generarFechasDePago(cuotas) {
  const fechasPago = [];
  const fechaPedido = new Date();
  
  for (let i = 0; i < cuotas; i++) {
    const fechaPago = new Date(fechaPedido);
    fechaPago.setMonth(fechaPago.getMonth() + i + 1);
    fechasPago.push(fechaPago.toLocaleDateString());
  }

  return fechasPago;
}

// Función para mostrar el detalle del crédito
function mostrarDetalleCredito(monto, cuotas, fechasPago) {
  console.log("Detalle del crédito:");
  console.log("Monto solicitado:", monto);
  console.log("Cantidad de cuotas:", cuotas);
  console.log("Valor de cada cuota:", calcularValorCuota(monto, cuotas).toFixed(2));
  console.log("Interés por cuota:", (calcularMontoTotal(monto, cuotas) - monto).toFixed(2));
  console.log("Fecha de solicitud:", new Date().toLocaleDateString());
  console.log("Fecha de vencimiento de cuotas:");

  fechasPago.forEach((fecha, index) => {
    console.log(`Cuota ${index + 1}: ${fecha}`);
  });

  console.log("Monto total a pagar:", calcularMontoTotal(monto, cuotas).toFixed(2));
}

// Inicio del programa
const usuarioIngresado = prompt("Ingrese su usuario:");
const contraseñaIngresada = prompt("Ingrese su contraseña:");

if (verificarCredenciales(usuarioIngresado, contraseñaIngresada)) {
  const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa):");
  const edad = calcularEdad(fechaNacimiento);

  if (edad >= 18) {
    const montoSolicitado = parseFloat(prompt("Ingrese el monto de dinero que necesita:"));
    const cuotas = parseInt(prompt("Elija la cantidad de cuotas (3, 6, 12 o 24):"));
    
    if ([3, 6, 12, 24].includes(cuotas)) {
      const fechasPago = generarFechasDePago(cuotas);
      mostrarDetalleCredito(montoSolicitado, cuotas, fechasPago);
    } else {
      console.log("Cantidad de cuotas no válida. Por favor, elija entre 3, 6, 12 o 24 cuotas.");
    }
  } else {
    console.log("Debes ser mayor de 18 años para solicitar un crédito.");
  }
} else {
  console.log("Usuario y/o contraseña incorrectos. Por favor, inténtelo nuevamente.");
}


*/









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



//Es una verdulería virtual

// Datos de acceso
const usuarioValido = "GUILLE";
const contraseñaValida = "CODERHOUSE";

// Base de datos de productos
const productos = [
  { nombre: "zanahoria", precio: 100 },
  { nombre: "papa", precio: 150 },
  { nombre: "zapallo", precio: 210 },
  { nombre: "rabanito", precio: 350 },
  { nombre: "banana", precio: 340 },
  { nombre: "Manzana", precio: 400 },
  { nombre: "Pera", precio: 320 },
  { nombre: "kiwi", precio: 500 },
  { nombre: "frutilla", precio: 650 },
  { nombre: "melón", precio: 400 }
];

// Función para verificar las credenciales
function verificarCredenciales(usuario, contraseña) {
  return usuario === usuarioValido && contraseña === contraseñaValida;
}

// Función para mostrar los productos
function mostrarProductos() {
  console.log("Lista de productos:");
  productos.forEach((producto, index) => {
    console.log(`${index + 1} - ${producto.nombre}, $${producto.precio}`);
  });
}

// Función principal
function main() {
  const usuarioIngresado = prompt("Ingrese su usuario:");
  const contraseñaIngresada = prompt("Ingrese su contraseña:");

  if (verificarCredenciales(usuarioIngresado, contraseñaIngresada)) {
    console.log("Bienvenido a la verdulería en línea.");
    mostrarProductos();

    const carrito = [];

    while (true) {
      const numeroProducto = parseInt(prompt("Ingrese el número del producto (0 para finalizar):"));

      if (numeroProducto === 0) {
        break;
      }

      if (numeroProducto >= 1 && numeroProducto <= productos.length) {
        const cantidadKilos = parseFloat(prompt(`Ingrese la cantidad de kilos de ${productos[numeroProducto - 1].nombre}:`));
        carrito.push({
          producto: productos[numeroProducto - 1].nombre,
          precio: productos[numeroProducto - 1].precio,
          cantidad: cantidadKilos
        });
      } else {
        console.log("Número de producto inválido. Por favor, ingrese un número válido.");
      }
    }

    // Calcular el total a pagar
    let totalPagar = 0;
    carrito.forEach(item => {
      totalPagar += item.precio * item.cantidad;
    });

    // Mostrar el resumen de la compra
    console.log("Resumen de la compra:");
    carrito.forEach(item => {
      console.log(`${item.cantidad.toFixed(2)} kg de ${item.producto}: $${(item.precio * item.cantidad).toFixed(2)}`);
    });
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);

    console.log("Gracias por su compra!");
  } else {
    console.log("Usuario y/o contraseña incorrectos. Por favor, inténtelo nuevamente.");
  }
}

// Ejecutar la función principal
main();
