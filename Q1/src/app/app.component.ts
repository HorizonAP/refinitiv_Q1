import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q1';
  input = 0;
  flag = '';
  options = [
    { id: 0, name: "isPrime" },
    { id: 1, name: "isFibonacci" },
  ];
  selectedValue = 0
  onKey(event: any) { // without type info
      let temp = parseFloat(event.target.value)
      if (isNaN(temp)) this.input = 0
      if (temp < 0) {
        this.input = 1
      } else {
        let x = Math.round(temp)
        this.input = x
      }
      this.cal()
  }

  cal() {
    const s = this.isPrime(this.input)
    console.log(this.selectedValue,s,this.input,this.flag)
    if (this.selectedValue == 0) {
    console.log('call isPrime',s)
    this.flag = s ? 'true' : 'false'
    } else {
    console.log('call isFibonacci',s)
    this.flag = s ? 'false' : 'true'
    }
  }

  isPrime(num: number) {
    if (num <= 1) return false;
    if (num === 2) return true;

    var sqrt = Math.sqrt(num);

    for (var i = 2; i <= sqrt; i++)
      if (num % i === 0) return false;
    return true;
  }
}
