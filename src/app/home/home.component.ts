import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { IServices } from '../services.interface';
import { IModal } from '../dialog.interface';
import { of } from 'rxjs';
import { shareService } from '../share.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Array<IServices>;
  selectedServices: Array<IServices>;
  form: FormGroup;
  data: [];

  constructor(private fb: FormBuilder, private share: shareService, public dialog: MatDialog) {

    this.services = [
      {name: 'Password Reset', price: 39.99},
      {name: 'RAM Upgrade', price: 129.99},
      {name: 'Tune-Up', price: 89.99},
      {name: 'Spyware Removal', price: 99.99},
      {name: 'Software Installation', price: 49.99},
      {name: 'Keyboard Cleaning', price: 45.00},
      {name: 'Disk Clean-Up', price: 149.99}
    ];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: {name: 'selectedServices.name', price: 'selectedServices.price'}
    })
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  get servicesFormArray(): FormArray {
    return this.form.controls.serviceOptions as FormArray;
  }

  private addCheckboxes(): void {
    this.services.forEach(() => this.servicesFormArray.push(new FormControl(false)));
  }

ngOnInit(): void {
  this.form = this.fb.group({
    serviceOptions: new FormArray([], minimumCheckboxes(1))
  })
  this.addCheckboxes();
}

onSubmit() {

  var labor = Number((document.getElementById('laborCharges') as HTMLInputElement).value);
  var parts = Number((document.getElementById('partsCharges') as HTMLInputElement).value);

  this.selectedServices = this.form.value.serviceOptions.map((checked, i) => checked? this.services[i] : null).filter(v => v !== null);

    this.selectedServices.push({
      name: "Labor",
      price: labor
    })

    this.selectedServices.push({
      name: "Parts",
      price: parts
    })

    this.selectedServices.push({
      name: "Total",
      price: this.selectedServices.reduce((sum, item) => sum + item.price, 0)
    })

    console.log(this.selectedServices);
  }
}

function minimumCheckboxes(min = 1) {
  const validate: ValidatorFn = (formArray: FormArray) => {
    const total = formArray.controls.map(control => control.value).reduce((previous, next)=> next? previous + next : previous, 0);

    return total >= min ? null : { required : true };
  };

  return validate;
}




