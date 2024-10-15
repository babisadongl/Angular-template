import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SharedDataService {
  sharedOutput: any = '';

  private outputSource = new BehaviorSubject(this.sharedOutput);
  currentOutput = this.outputSource.asObservable();

  constructor() {}

  getEventType(message: string) {
    this.outputSource.next(message);
  }
}
