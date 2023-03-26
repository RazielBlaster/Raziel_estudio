
//metodos de string

//length = muestra la longitud de algo (Cualquier tipo de dato)

{
 // let frase = "Jhojan es"
// let contar= frase.length
// console.log(contar);


// const nMax = 10

// let word = 'la pija nos vemos'

// if (word.length > nMax) {
//     console.log(' Te pasaste de verga');
// }else{
//     console.log('Perfecto');
// }

// console.log(typeof word.length)
}


//includes = En una cadena de texto buscar lo que se esta solicitando(es sensible a mayus y minus)
{
// let frase1= "La vida es una verga"
// let caract= "La"

// console.log(frase1.includes(caract));
}


//toUpperCase = para cambiar a mayusculas
//toLowerCase = para cambiar a minus
{
// let frase1 = "la perra de jhojan"
// console.log(frase1.toUpperCase());
// let frase2 ="MAYUCULAS"
// console.log(frase2.toLowerCase());

// // si una letra esta dentro de frase1 y se cumple alguna de las condicion 
// //frase2 = frase2.toLowerCase()
// console.log(frase2.includes("a"));
// console.log(frase2.toLowerCase().includes("a"));

}

//replace = para reempazar un caracter
{
// let frase = "Hola mundo mama"
// let palabra ="perra"
// console.log(frase.replace("m","M"));
// console.log(frase.replaceAll("m","M").toUpperCase().replace("A","a"));
}

//slice = cortar
{
// let frase="Hola manada de pervertidos"
// console.log(frase.slice(0,6));
// console.log(frase.slice(-5));
}

//endsWith y startsWith para validar si empieza con o terminar con

{
// let frase="hola perra"
// console.log(frase.endsWith("a"));
// console.log(frase.startsWith("j"));
}
//if = condicional 

{
//let frase="hola perra"
// if(frase.includes("z")){
// console.log("Si esta la letra a");
// }else{
//     console.log("No esta la letra a");
// }

// if(frase.includes("r")){
//     frase=frase.replaceAll("r","R")
//     console.log(frase);
// 
}


//Cree una función en donde si la frase tiene menos de 15 letras remplace la última letra por una mayúscula, si tiene más de 15 letras. Remplace la primera letra por minúscula.
{
// let frase="hola a todos"

// function change(frase){
// if(frase.length <= 15){
//   let guarLet=frase.slice(-1)
//   let camMayus=guarLet.toUpperCase()
//   if(frase.includes(guarLet)){
//     frase=frase.replace(guarLet,camMayus)
//      console.log(frase)
//   }
 
// }else{
//   console.log("no funciono")
// }  
// }


// change(frase)
}
