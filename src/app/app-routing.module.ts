import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookapointmentComponent } from './bookapointment/bookapointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { PatientcareComponent } from './patientcare/patientcare.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'doctors' , component: DoctorsComponent},
  {path: 'patientcare' , component: PatientcareComponent},
  {path: 'bookappointment' , component : BookapointmentComponent},
  {path: 'location' , component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
