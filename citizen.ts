class Citizen {
    id: string;
    name: string;
    email: string;
    greenPoints: number;
  
    constructor(id: string, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.greenPoints = 0;
    }
  
    reportIssue(issue: string): void {
      console.log(`Citizen ${this.name} reported: ${issue}`);
    }
  
    earnGreenPoints(points: number): void {
      this.greenPoints += points;
      console.log(`${this.name} earned ${points} Green Points. Total: ${this.greenPoints}`);
    }
  }
  