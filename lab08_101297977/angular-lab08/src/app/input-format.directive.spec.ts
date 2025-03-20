import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('input')); 
    const directive = new InputFormatDirective(elementRefMock); 
    expect(directive).toBeTruthy();
  });
});
