export class CalculatorService {
  
  public add(n1: number, n2: number) {
    console.log("Addition operation called");
    return n1 + n2;
  }

  public subtract(n1: number, n2: number) {
    console.log("Subtraction operation called");
    return n1 - n2;
  }
}