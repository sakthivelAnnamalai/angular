import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilityserviceService {

  constructor(private messageService: MessageService) {

   }

   errorToast(msg: string) {
    this.messageService.add({
      key: 'c',
      closable: true,
      severity: 'error',
      detail: msg,
      life: 2000,
    });
  }
  successToast(msg: string) {
    this.messageService.add({
      key: 'c',
      closable: true,
      severity: 'success',
      detail: msg,
      life: 2000,
    });
  }
}
