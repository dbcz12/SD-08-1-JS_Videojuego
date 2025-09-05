export class Player {
    constructor(name) {
      this.name = name;
    }
}

const jugador1 = new Player("Ana");
const jugador2 = new Player("Carlos");

console.log(jugador1.name); // "Ana"
console.log(jugador2.name); // "Carlos"