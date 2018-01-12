import { Spacecraft, Containership } from "./base-ships";

class MilleniumFalcon extends Spacecraft implements Containership {  
    cargoContainers: number;

    constructor() {
        super('hypedrive');
        this.cargoContainers = 2;
    }

    jumpIntoHyperSpace() {
        if(Math.random() >= 0.5) {
            super.jumpIntoHyperSpace();
        } else {
            console.log('Failed to jump into hyperspace!');
        }
    }    
}

export { MilleniumFalcon }