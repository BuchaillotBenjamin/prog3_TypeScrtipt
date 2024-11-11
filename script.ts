// console.log("hola Mundo")

let estudiasteJavaScript: boolean=true;

if(estudiasteJavaScript){
    console.log("puedes seguir viendo este curso")
}else{
    console.log("primero tienes que ver el curso de JavaScript")
}

console.log("------------------------------------------------");

let interMiammi: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean):void {
    let motivo: string = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = "porque juega Messi"
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2) console.log(`Empate`);
    if (equipo1 < equipo2) console.log(`Gana FC Dallas`);

};
jugar(interMiammi, fcDallas,juegaMessi);

console.log("------------------------------------------------");

let disney: any;

disney = "Star Wars y Marvel";
console.log(disney);

disney = 15000000000;
console.log(disney);

disney = true;
console.log(disney);

console.log("------------------------------------------------");

let arregloNumeros: number[] = [1, 2, 3, 4, 5];

let arregloTexto: string[] = ["HTML", "CSS", "JAVASCRIPT"];


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


type Programador = {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
};

let programador1: Programador = {
    nombre: "Sergie code",
    tecnologias: ["React", "Angular", "Svelte"],
    tomarMate: true
};

let programador2: Programador = {
    nombre: "Federico",
    tecnologias: ["HTML", "Cobol"],
    tomarMate: null
};

console.log("------------------------------------------------");


interface IProgramador {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null
};

let dev1: Programador = {
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

function enviarCurriculum( programador: IProgramador){
    console.log(`Este CV es de ${programador.nombre}`)
};

enviarCurriculum(dev2);

console.log("------------------------------------------------");
