import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {
  checkStatus : CheckStatusComponent = new CheckStatusComponent();
  employeeDetails : EmployeeDetails = new EmployeeDetails();


  constructor() { }

  ngOnInit(): void {
  }

}
