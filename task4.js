export class Player {
    constructor(name, level) {  
        this.name = name;
        this.level = level;   
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}!`); 
    }

    levelUp() {
        this.level++;
    }

}  // ← Cerrar la clase

const jugador1 = new Player("Diana", 10);
const jugador2 = new Player("Mario", 12);

jugador1.info(); // "Diana has reached Level 10!"
jugador2.info(); // "Mario has reached Level 12!"