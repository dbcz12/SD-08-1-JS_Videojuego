export class Player {
    constructor(name, level) {  // ← Corregido: "level" no "lavel"
        this.name = name;
        this.level = level;     // ← Ahora funciona porque el parámetro se llama "level"
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}!`); // ← console.log y agregado "!"
    }
}  // ← Cerrar la clase

const jugador1 = new Player("Diana", 10);
const jugador2 = new Player("Mario", 12);

jugador1.info(); // "Diana has reached Level 10!"
jugador2.info(); // "Mario has reached Level 12!"