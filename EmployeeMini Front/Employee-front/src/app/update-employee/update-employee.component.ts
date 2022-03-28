import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor( private employeeservice:EmployeeService,
     private route :ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data
    
    },Error=>console.log(Error));
  }
  gotoEmployeeList(){
    this.router.navigate(["/employees"])
  }

  onSubmit(){
    this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data=> this.gotoEmployeeList(),Error=>console.log(Error))
    }
}
