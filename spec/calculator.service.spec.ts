
import { CalculatorService } from '../src/services/calculator.service';

describe('CalculatorService', () => {
  const calculatorService = new CalculatorService();
  it('should add two numbers', () => {
    const result = 5;
    const add = calculatorService.add(2,3);
    expect(add).toEqual(result);
  });

  it('should substract two numbers', () => {
      const result = 1;
      const add = calculatorService.subtract(3,2);
      expect(add).toEqual(result);
  });
});