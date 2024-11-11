class Sorteo<T> {

    private ticket?: T;

    constructor(
        private nombre: string   
    ) { }

    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket() {
        return this.ticket;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo1 = new Sorteo<number>("Sergie Code");
sorteo1.setTicket(7);
console.log(sorteo1.sortear());

let sorteo2 = new Sorteo<string>("Sergie Code2");
sorteo2.setTicket("S7");
console.log(sorteo2.sortear());
console.log("-----------------------------------------------");