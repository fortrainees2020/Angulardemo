import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  customerName = "Daffy Duck"

  welcomeBugsBunny() {
    this.customerName = "Bugs Bunny"
  }}
