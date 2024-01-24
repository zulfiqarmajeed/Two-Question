// In this project you are going to follow this video which explains object oriented
// programming using C# and write the same code in TypeScript.

// Create a GitHub repository for the project and submit its URL in the project submission form.

class Car {
    private make: string;
    private model: string;
    private year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayInfo(): void {
      console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }
  }
  
  
  const myCar = new Car('Toyota', 'Camry', 2022);
  myCar.displayInfo();
  