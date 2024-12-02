"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citizen = void 0;
class Citizen {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.greenPoints = 0;
    }
    reportIssue(issue) {
        console.log(`Citizen ${this.name} reported: ${issue}`);
    }
    earnGreenPoints(points) {
        this.greenPoints += points;
        console.log(`${this.name} earned ${points} Green Points. Total: ${this.greenPoints}`);
    }
}
exports.Citizen = Citizen;
