"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo1 = new Sorteo("Sergie Code");
sorteo1.setTicket(7);
console.log(sorteo1.sortear());
let sorteo2 = new Sorteo("Sergie Code2");
sorteo2.setTicket("S7");
console.log(sorteo2.sortear());
console.log("-----------------------------------------------");
