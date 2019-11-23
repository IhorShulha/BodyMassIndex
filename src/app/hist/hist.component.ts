import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Hist } from '../hist';

@Component({
  selector: 'app-hist',
  templateUrl: './hist.component.html',
  styleUrls: ['./hist.component.css']
})
export class HistComponent implements OnInit {

  constructor(private Hist: Hist) { }

  histBmi: User[];
  ngOnInit() {
    this.histBmi = this.Hist.getHist();
  }

}
