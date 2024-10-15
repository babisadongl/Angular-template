import {Injectable} from '@angular/core';
import {MdbNotificationService} from 'mdb-angular-ui-kit/notification';
import {ToastrComponent} from '../common/toastr/toastr.component';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private notificationService: MdbNotificationService) {}

  showSuccess(detail: string, life?: number): void {
    this.showToast(' bg-success', 'Success', detail, life);
  }

  showInfo(detail: string, life?: number): void {
    this.showToast(' bg-primary', 'Info', detail, life);
  }

  showWarning(detail: string, life?: number): void {
    this.showToast(' bg-warning', 'Warning', detail, life);
  }

  showError(detail: string, life?: number): void {
    this.showToast(' bg-danger', 'Error', detail, life);
  }

  showToast(severity: string, summary: string, detail: string, life = 3000): void {
    this.notificationService.open(ToastrComponent, {
      delay: life,
      autohide: true,
      stacking: true,
      data: {severity, summary, detail},
    });
  }
}
