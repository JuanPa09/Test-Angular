import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Url para obtener los departamentos de guatemala
  departmentsRequest:string = "https://capaportaldatosabiertos.mingob.gob.gt/api/dataset/7f3ea5e50ea1b9ab7e988eade7b29dbc";
  concessionaire:Array<string> = ['Concesionario Norte','Concesionario Sur', 'Concesionario Este', 'Concesionario Oeste'];
  departments:Array<string> = [];

  dataForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    agent: new FormControl('', Validators.required),
    vehicle: new FormControl('', Validators.required),
    concessionaire: new FormControl('', Validators.required) 
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fillDepartmentsSelect();
    console.log(this.departments)
  }

  fillDepartmentsSelect(){
    this.http.get(this.departmentsRequest).subscribe((d:any)=>{
      let data = d.result.data
      data[0].slice(1).forEach((department:any) => {
        this.departments.push(department[Object.keys(department)[0]]);
      });
    })
  }

  submitInfo(){
    //alert(this.dataForm.get('name').)
    console.log(this.dataForm.get('concessionaire')?.value)
  }

}
