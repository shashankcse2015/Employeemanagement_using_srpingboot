import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
 
  constructor( private employeeservice:EmployeeService,private router:Router
    ) { }

  ngOnInit(): void {
    
  }
  gotoEmployeeList(){
    this.router.navigate(["/employees"])
  }

  saveEmployee(){
    this.employeeservice.createEmployee(this.employee).subscribe(data =>{
      console.log(data)
    },
    error=>console.error(error));
    this.gotoEmployeeList();
    
  }

  onSubmit(){ 
    console.log(this.employee)
    this.saveEmployee()

  };

}
