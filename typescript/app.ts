import { Spacecraft, Containership } from "./base-ships";
import { MilleniumFalcon } from "./starfighters";

import * as _ from 'lodash';

console.log(_.pad('Typescript Examples', 40, '='))


let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 1
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)