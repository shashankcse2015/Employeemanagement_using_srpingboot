import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseurl="http://localhost:8080/employees"

  constructor( private http:HttpClient) { }
  getEmployeesList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseurl}`);

  }
  createEmployee(employee:Employee):Observable<Object>{

    return this.http.post(`${this.baseurl}`,employee);
  }
  getEmployeeById(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseurl}/${id}`)
  }
  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.http.put<Employee>(`${this.baseurl}/${id}`,employee)
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${this.baseurl}/${id}`)
  }
}
