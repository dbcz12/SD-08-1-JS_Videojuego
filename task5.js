export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.experience = 0;
        this.experienceToNextLevel = 100; // Puntos necesarios para subir de nivel
    }
    
    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }
    
    levelUp() {
        this.level++;
        this.experience = 0; // Resetear experiencia al subir de nivel
        this.experienceToNextLevel = this.level * 100; // Cada nivel requiere más experiencia
        console.log(`${this.name} leveled up! Now at Level ${this.level}`);
    }
    
    gainExperience(points) {
        this.experience += points;
        console.log(`${this.name} gano ${points} puntos de experiencia (${this.experience}/${this.experienceToNextLevel})`);
        
        // Verificar si debe subir de nivel
        if (this.experience >= this.experienceToNextLevel) {
            this.levelUp();
        }
    }
    
    showStatus() {
        console.log(`${this.name} - Nivel ${this.level} - Experiencia: ${this.experience}/${this.experienceToNextLevel}`);
    }
}

const jugador1 = new Player("Diana", 1);
jugador1.showStatus(); // Diana - Nivel 1 - Experiencia: 0/100
jugador1.gainExperience(60); // Diana gano 60 puntos de experiencia por lo que ahora esta en el nivel 2
jugador1.showStatus(); // Diana - Nivel 2 - Experiecia: 0/200