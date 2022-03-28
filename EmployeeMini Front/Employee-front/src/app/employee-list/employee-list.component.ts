import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees:Employee[];

  constructor( private employeeservice:EmployeeService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data=>{
      this.employees=data;
    })
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])

  }
  deleteEmployee(id:number){
    this.employeeservice.deleteEmployee(id).subscribe(data => this.getEmployees(),
    Error=>console.log(Error))

  }
  detailEmployee(id:number){
    this.router.navigate(['employee-details',id])
  }

}
