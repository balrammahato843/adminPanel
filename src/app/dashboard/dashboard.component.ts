import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from '../service/api.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service:ApiService) { }

  count=0;
  ngOnInit(): void {
    var myChart = new Chart( "myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June' , 'July' , 'August' , 'September' , 'October' ,'November' ,'December'],
          datasets: [{
              label: 'Number of Patients every month',
              data: [12, 19,24,17,34,23,19,22,12,18,21,27],
              backgroundColor: [
                  'blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue',                 
              ],
              borderColor: [
                  'black','black','black','black','black','black','black','black','black','black','black','black',

                 
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  var myChart1 = new Chart( "myChart1", {
    type: 'pie',
    data: {
        labels: ['January',  'May',  'October' ,'December'],
        datasets: [{
            label: 'Number of Doctors Added',
            data: [2, 1, 3,1],
            backgroundColor: [
                'blue','pink','red','yellow'                 
            ],
            borderColor: [
                'black', 
                'black',
                'black',
                'black'  
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


  }

  increment(count)
  {
    this.service.increasePatientCount(count);
  }
  
 

}
