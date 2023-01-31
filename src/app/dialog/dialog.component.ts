import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  doctorForm !: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef : MatDialogRef<DialogComponent>, private api: ApiService) { }
  doctorsData:any;

  ngOnInit(): void {

    this.doctorForm = this.fb.group({
      DoctorName : ['' , Validators.required],
      Address :  ['' , Validators.required],
      Age: ['' , Validators.required],
      JoiningDate:  ['' , Validators.required],
      Description:  ['' , Validators.required],
      Department:  ['' , Validators.required],
      Gender:  ['' , Validators.required]
    })

    this.getAllDoctors();
  }

  addDoctor(){
   if(this.doctorForm.valid){ 
    this.api.postDoctor(this.doctorForm.value).subscribe({
      next:(res)=>{
        alert("Doctor Added Successfully")
        this.doctorForm.reset();
        this.dialogRef.close('save');
      },
      error :()=>{
               alert ("Error while adding the Doctor")
      }
    })
   }
  }

  getAllDoctors() {
    this.api.getDoctor().subscribe({
      next: (res) => {
        // console.log(res);
        this.doctorsData=res;
           console.log(this.doctorsData);

      },
      error: (err) => {
        alert('Error while fetching the records');
      },
    });
  }



}
