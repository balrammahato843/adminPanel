import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from '../service/api.service';
import { patient } from './form';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bookapointment',
  templateUrl: './bookapointment.component.html',
  styleUrls: ['./bookapointment.component.scss'],
})
export class BookapointmentComponent implements OnInit {
  count: number;
  value: any;
  addPatientForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private service: ApiService) {}

  patientModel: patient = new patient();

  ngOnInit(): void {
    this.addPatientForm = this.formBuilder.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      specialization: new FormControl(),
      email: new FormControl(),
    });

    this.getAllPatients();
  }

  createPatient() {
    this.patientModel.firstname = this.addPatientForm.value.firstname;
    this.patientModel.lastname = this.addPatientForm.value.lastname;
    this.patientModel.age = this.addPatientForm.value.age;
    this.patientModel.gender = this.addPatientForm.value.gender;
    this.patientModel.specialization = this.addPatientForm.value.specialization;
    this.patientModel.email = this.addPatientForm.value.email;
    this.value = this.patientModel;

    this.service.addPatient(this.patientModel).subscribe(
      (data) => {
        console.log(data);

        alert('Patient added successfully');
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  getAllPatients() {
    this.service.getPatient().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        alert('Error while fetching the records');
      },
    });
  }

  increase1() {
    this.service.increasePatientCount(this.count);
  }
}
