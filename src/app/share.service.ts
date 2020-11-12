import { Injectable } from '@angular/core';
import { IServices } from './services.interface';

Injectable()

export class shareService {
  selectedServices: Array<IServices>;
    getShared() {
      return this.selectedServices;
    }
    setShared(data: any[]){
      this.selectedServices = data;
    }
}
