alert('Bienvenido al web chekout del hotel');
let i;
let totalHuespedes;
let huesped;
let tarifaSimple= 8500;
let tarifaSuperior = 12500;
let tarifaSuite = 17000;
let tarifaTotal;
let tarifaElegida;
let serExtra;
let totalExtra;
let montoIva;
let totalParcial;
let total;
const IVA= 1.21;
const descSocio= 0.18;

function tarifador(tarifa, cantnoches,){
    tarifaTotal = cantnoches*tarifa;
    console.log('Su cargo por hospedaje es: '+tarifaTotal);
    return tarifaTotal;
}
function eleccionHabitacion(){
    let habitacion= parseInt(prompt(' Ingrese opcion de alojamiento \n 1- Habitacion Simple\n2- Habitacion Superior\n3- Habitacion Suite'));
    if (habitacion === 1) {
        tarifaElegida = tarifaSimple;
        console.log('Eleccion de habitacion simple, tarifa por noche sin iva: '+ tarifaSimple );
    } else if (habitacion === 2){
        tarifaElegida = tarifaSuperior;
        console.log('Eleccion de habitacion superior, tarifa por noche sin iva: '+ tarifaSuperior );
    } else if (habitacion === 3){
        tarifaElegida = tarifaSuite;
        console.log('Eleccion de habitacion suite, tarifa por noche sin iva: '+ tarifaSuite );
    } else {
        alert('opcion ingresada incorrecta, recargue la pagina');
    }      
    return tarifaElegida;    
}

function serviciosExtras(cantNoches){
    let extra= parseInt(prompt(' Ingrese opcion de servicio extra \n 1- Acceso a Gimnasio\n2- Acceso a Spa\n3- Acceso a piscina\n 4-ninguno'));
    if (extra === 1) {
        serExtra = 1000;
    } else if (extra === 2){
        serExtra = 1500;
    } else if (extra === 3){
        serExtra = 1250;
    } else if (extra=== 4) {
        serExtra = 0;
    }else{
        alert('opcion ingresada incorrecta, recargue la pagina');
        
    }
    totalExtra = cantNoches*serExtra;
    console.log('Su cargo por servicios extras sin iva es: '+totalExtra);
    return totalExtra;
}

function cobro (hospedaje, serrExt){
    let nacionalidad =parseInt(prompt('Es de nacionalidad extranjera\n 1- No.\n 2- Si'));
    if (nacionalidad===1){
        montoIva= (hospedaje + serrExt)* 0.21;
        totalParcial =(hospedaje + serrExt)*IVA;
        console.log('nacionalidad Argentina');
    }else if (nacionalidad === 2){
        totalParcial = hospedaje + serrExt;
        montoIva=0;
        console.log('nacionalidad Extranjera');
    }else {
        alert('opcion ingresada incorrecta, recargue la pagina');
        
    }
    let socio =parseInt(prompt('Es socio\n 1- No.\n 2- Si'));
    if (socio===1){
        total = totalParcial;
        console.log('No es socio');
    }else if (socio === 2){
        total = totalParcial-(totalParcial*descSocio);
        console.log('es socio, se aplicara descuento del 18%');
    }else {
        alert('opcion ingresada incorrecta, recargue la pagina');
        
    }
    
    console.log('Total del cobro por alojamiento y servicios extra del Sr/Sra '+huesped+' : '+total);
    alert(':::Su ticket Sr/Sra '+huesped+'::: \n :::Sus cargos por Hospedaje: '+ hospedaje +':::\n:::Sus cargos por extras:'+ serrExt+':::\n :::Cobro del Iva: '+ montoIva+':::\n:::Su total: '+total+':::\n:::Por favor acerquese a recepcion con este ticket para realizar el pago o continue para el pago total:::\n:::GRACIAS POR ELEGIRNOS:::');
    totalHuespedes=totalHuespedes+total;
    return total;
}

function checkout(nombre,apellido,noches,){
    nombre = prompt('Ingrese su nombre');
    apellido = prompt('Ingrese su apellido');
    huesped = (nombre+' '+apellido);
    console.log('Huesped: '+huesped);
    noches = parseInt(prompt('Ingrese la cantidad de noches que desea hospedarse:'));
    eleccionHabitacion();
    tarifador(tarifaElegida, noches,);
    serviciosExtras(noches);
    cobro(tarifaTotal,totalExtra);
    
}
let habitacionesCobr =parseInt(prompt('ingrese cantidad de habitaciones'));
for (i=0; i<habitacionesCobr; i++){
    checkout(); 
     
}
console.log('Total del cobro por alojamiento y servicios extra de las habitaciones: '+totalHuespedes);
    alert('Su total a pagar por las habitaciones ocupadas: '+totalHuespedes); //tengo problemas con la variable total huespedes, al ejecutalo me aparece como NaN y no encuentro el problema, en la line 87 deberia estar acumulando los valores del total en cada paso por el bucle.
