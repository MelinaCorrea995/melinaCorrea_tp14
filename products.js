
let productosElectrodomesticos = ["lavarropas", "microondas", "heladera", "licuadora", "cafetera", "tostadora"];

// ACCEDER DE MANERA ARBITRARIA 
// console.log (productosElectrodomesticos[4]); //cafetera
// console.log(productosElectrodomesticos[2]); //heladera
// console.log(productosElectrodomesticos[0]); //lavarropas
// console.log(productosElectrodomesticos[1]); //microondas
// console.log(productosElectrodomesticos[3]); //licuadora
// console.log(productosElectrodomesticos[5]); // tostadora

//EXTRAER EL PRIMER ELEMENTO DEL ARRAY Y AGREGARLO AL FINAL 

let primerElemento = productosElectrodomesticos.shift() ;
// console.log(primerElemento);
productosElectrodomesticos.push("lavarropas");
// console.log(productosElectrodomesticos);

// AGREGAR AL FINAL DEL ARRAY DOS NUEVOS PRODUCTOS

productosElectrodomesticos.push("aireacondicionado", "minipimer");
// console.log(productosElectrodomesticos);

//MOSTRAR POR CONSOLA LA CANTIDAD DE ELEMENTOS QUE CONTIENE UN ARRAY

// console.log(productosElectrodomesticos.length);

//BUSCAR UN ELEMENTO DEL ARRAY Y CREAR CONDICION : SI EXISTE/NO EXISTE

if (productosElectrodomesticos.indexOf("aireacondicionado") !=-1) {
    // console.log("Producto encontrado");
}
else {
    // console.log("producto buscasdo no existe");
}

//UNIFICAR TODOS LOS ARRAY EN UNA CADENA DE TEXTO

let espacioBlanco = 
productosElectrodomesticos.join(" ");

// console.log(espacioBlanco) ;

//CANTIDAD DE ELEMENTOS QUE POSEE LA CADENA D TEXTO

// console.log(productosElectrodomesticos.length);

//CADENA DE TEXTO


productosElectrodomesticos.splice(1 , 0 , "pava electrica");
console.log(productosElectrodomesticos);

//GENERAR NUEVO ARRAY 

// let  productos = [
//     'microondas','pava electrica','heladera','licuadora','cafetera','tostadora','lavarropas','aireacondicionado','minipimer'];

//     productos.join(" , ");

    console.log(productosElectrodomesticos.join(","));

