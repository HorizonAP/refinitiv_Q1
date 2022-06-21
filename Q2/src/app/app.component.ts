import { Component,OnInit } from '@angular/core';
import { ServeService,IData } from './serve.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Q2';
  categories: string[] = [];
  input:string = ''
  constructor(private service: ServeService) { }
  ngOnInit():void {
    this.service.getData().subscribe(data => {
      console.log(data)
      this.categories = data.categories;
    })
  }

  onKey(event: any) {
    let PATTERN = event.target.value
    this.categories = this.categories.filter( (str) =>{ return str.includes(PATTERN) });
  }
}
