import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lastkey: any = '';
  totalExpression: any = '';

  pressKey(key): any {

    

    if (key === 'ac') {
      this.totalExpression = '';
      this.lastkey = '';
      return '';
    }
     if (this.totalExpression.length > 20) {
       return ''
     }

    let nonNumeric = ['.', 'x', '+', '-', '±', '/', '=', 'ac', '%', '÷']
    let symbolExists = nonNumeric.find((eachVal) => eachVal === key)
    
    
    // if last key is symbol and present key is number than we should calculate and return results
    let islastkeySymbol = nonNumeric.find((eachVal) => eachVal === this.lastkey)
    if (islastkeySymbol && !isNaN(key)) {
      this.totalExpression = this.totalExpression.substring(0, this.totalExpression.length - 1)
      if (this.lastkey === '+') { // Addition
        this.totalExpression = Number(this.totalExpression) + Number(key)
      } else if (this.lastkey === '-') {
        this.totalExpression = Number(this.totalExpression) - Number(key)
      }
      this.lastkey = this.totalExpression
      return ''
    }

    if (symbolExists) { // selected key is operator/Symbol
      let operation = key
      // if lastkey is empty that means nothing has entered, so we should not allow sysmbols direcly
      if (this.lastkey === '') { // It should return nothing, not allowing sysmbols directly first time
        return ''
      }
      if (operation !== this.lastkey) { // checking present key and last key are not same 
        if (isNaN(this.lastkey)) { // if true then it is a symbol then we need to replace the operator
          this.totalExpression = this.totalExpression.substring(0, this.totalExpression.length - 1)
        }
        this.totalExpression = this.totalExpression + key
      }
    } else {
      this.totalExpression = this.totalExpression + key
    }

    if (key === '=') { // Answer should assign to total expression
      if (this.totalExpression === '') {
        return ''
      } else {
        // let exp = this.totalExpression
        // exp.split('')

      }
    }

    this.lastkey = key
  }
}
