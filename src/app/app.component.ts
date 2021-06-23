import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 0;
  inpClas: string = "";

  change(amount: number): void{
    this.num += amount;
    this.display();
  }
  display(): void {
    this.inpClas = "";
    if(this.num % 2 == 0) this.inpClas += " text-danger ";
    if(this.num % 3 == 0) this.inpClas += " fw-bold ";
    if(this.num % 7 == 0) this.inpClas += " fst-italic "
    
  }

}
