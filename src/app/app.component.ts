import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { Hist } from './hist';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Hist: Hist) {}
  userAge: number = null;
  userWeight: number = null;
  userHeight: number = null;
  histBmi: User[];

  ngOnInit() {
    this.histBmi = this.Hist.getHist();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const i: number = +(
        this.userWeight / Math.pow(this.userHeight / 100, 2)
      ).toFixed(1);

      this.Hist.addBmi(
        new User(this.userHeight, this.userWeight, i)
      );
      this.histBmi = this.Hist.getHist();

      const message = (i > 25 || i < 18.5) ? 'Not Ok!' : 'Ok!';

      alert(`Your index: ${i}. It is ${message}`);
    }
  }
}
