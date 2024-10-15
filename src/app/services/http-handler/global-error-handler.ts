import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MessageConstants} from '../../constants';
import {ToastrService} from '../toastr.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private messageConstants: MessageConstants) {}

  handleError(error: Error | HttpErrorResponse): void {
    const notifier = this.injector.get(ToastrService);

    let message;
    if (error instanceof HttpErrorResponse) {
      // Server Error
      message =
        error.error && typeof error.error !== 'object'
          ? error.error
          : this.messageConstants.getMessage(error.status);
      notifier.showError(message ? message : error.message);
    }

    // log errors
    console.error(error); // app trackers and exceptions logging to servers should be done from here
  }
}
