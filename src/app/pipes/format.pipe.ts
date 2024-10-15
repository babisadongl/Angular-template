import {CurrencyPipe, DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {DataType, PipeFormat} from '../interfaces';

@Pipe({
  name: 'formatPipe',
})
export class FormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe, private currencyPipe: CurrencyPipe) {}

  transform(value: any, type: DataType): any {
    switch (type.format) {
      case 0:
        return value;
      case 1:
        return this.currencyPipe.transform(value, type.currencyCode, type.currencyDisplay);
      case 2:
        return this.datePipe.transform(value, type.dateFormat);
      default:
        return value;
    }
  }
}
