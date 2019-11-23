import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
    providedIn: 'root',
  })
export class Hist {
    histBmi: User[] = [];

    addBmi(record: User) {
        this.histBmi.push(record);
    }

    getHist(): User[] {
        return this.histBmi;
    }
}
