let nombre= prompt("¡El Country tenis te da la bienvenida!, ¿Cómo te llamás?");

console.log (nombre);

let horas = parseFloat(prompt("Hola "+ nombre + "! ¿Cuántas horas quisieras reservar la cancha de tenis?"));

let precioHora = 1800;

let costo= precioHora * horas;

let socio = prompt("El costo de tu reserva será $ " + costo + " ¿Sos socio/a del club?");

let descuento = (a,b) => a-(a*(b)/100)
resultado=(descuento(costo, 20))

if (socio == "si"){
    alert("¡Felicitaciones! Tenés un 20% de descuento, por lo que solo deberás abonar $"+ resultado);

} else{ 
   
    alert("Siendo socio del club contarás con beneficios especiales y descuentos. Podrás consultarlos en la sección SOCIOS"); 
}

    let cierre= prompt("Para elegir día y horario de la reserva comunicarse al 4248-6534. Escriba FIN para salir");

    let fin = cierre.toLowerCase();
  

    while (fin != "fin"){
        
        cierre= prompt("Para elegir día y horario de la reserva comunicarse al 4248-6534. Escriba FIN para salir");

    }




 