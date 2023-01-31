import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  doctorsData: any;

  displayedColumns: string[] = [
    'DoctorName',
    'Address',
    'Age',
    'JoiningDate',
    'Description',
    'Department',
    'Gender',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private service: ApiService) {}

  ngOnInit(): void {
  
      this.service.getDoctor().subscribe({
        next: (res) => {
          // // console.log(res);
          // this.doctorsData=res;
          //    console.log(this.doctorsData);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert('Error while fetching the records');
        },
      });
    
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  // getAllPatients() {
  //   this.service.getPatient().subscribe({
  //     next: (res:[]) => {
  //       // console.log(res);
  //       this.dataSource= new MatTableDataSource(res);
  //      this.dataSource.paginator = this.paginator;
  //      this.dataSource.sort = this.sort
  //     },
  //     error: (err) => {
  //       alert('Error while fetching the records');
  //     },
  //   });
  // }

 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
function getAllDoctors() {
  throw new Error('Function not implemented.');
}

