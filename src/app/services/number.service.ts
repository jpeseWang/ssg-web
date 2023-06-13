import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  getNumberWithCommas(num: number) {
    let x = num.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x + ',000';
  }
}
