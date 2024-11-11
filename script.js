"use strict";
// console.log("hola Mundo")
let estudiasteJavaScript = true;
if (estudiasteJavaScript) {
    console.log("puedes seguir viendo este curso");
}
else {
    console.log("primero tienes que ver el curso de JavaScript");
}
console.log("------------------------------------------------");
let interMiammi = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = "porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log(`Empate`);
    if (equipo1 < equipo2)
        console.log(`Gana FC Dallas`);
}
;
jugar(interMiammi, fcDallas, juegaMessi);
console.log("------------------------------------------------");
let disney;
disney = "Star Wars y Marvel";
console.log(disney);
disney = 15000000000;
console.log(disney);
disney = true;
console.log(disney);
console.log("------------------------------------------------");
let arregloNumeros = [1, 2, 3, 4, 5];
let arregloTexto = ["HTML", "CSS", "JAVASCRIPT"];
arregloTexto.push("TYPESCRIPT");
arregloTexto[0].indexOf("HTML");
console.log("------------------------------------------------");
let programador = {
    nombre: "Sergie code",
    tecnologias: ["React", "Angular", "Svelte"],
    tomaMate: true
};
programador = {
    nombre: "Ricardo Buenardo",
    tecnologias: ["C#"],
    tomaMate: false
};
console.log(programador);
console.log("------------------------------------------------");
let programador1 = {
    nombre: "Sergie code",
    tecnologias: ["React", "Angular", "Svelte"],
    tomarMate: true
};
let programador2 = {
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    tomarMate: null
};
console.log("------------------------------------------------");
;
let dev1 = {
    nombre: "Sergie code",
    tecnologias: ["React", "Angular", "Svelte"],
    tomarMate: true
};
let dev2 = {
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    tomarMate: null,
    apellido: "Buenardo",
    recibido: false
};
function enviarCurriculum(programador) {
    console.log(`Este CV es de ${programador.nombre}`);
}
;
enviarCurriculum(dev2);
console.log("------------------------------------------------");
