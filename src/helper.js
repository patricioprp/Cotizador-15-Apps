//Diferencia en años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}
//Calcula el total a pagar segun la marca
export function calcularMarca(marca){

    let incremento;

    switch(marca){
        case "europeo":
            incremento = 1.3;
            break;
        case "americano":
            incremento = 1.15; 
            break;
        case "asiatico":
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//calcula el tipo de seguro
export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

//muestra la primer letra en mayuscula
export function primerMayuscula(texto){
    //CharAt(0) elige la primera posicion del texto, con  toUpperCase la hacemos mayusc
    //luego concatenamos con el resto del texto pero sin la primera letra
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}