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

  lastkey: any;
  totalExpression: any = '';

  pressKey(key): any {
    if (key === 'ac') {
      this.totalExpression = ''
      return '';
    }
    if (key === '=') {
      this.totalExpression = 'Answer'
      return '';
    }
    this.totalExpression = this.totalExpression + key
    this.lastkey = key
  }

}
