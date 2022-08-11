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
  apiUrl:string = "https://nameless-escarpment-55713.herokuapp.com/info"
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
    let concessionaire = this.dataForm.get('concessionaire')?.value;
    let name = this.dataForm.get('name')?.value;
    let phone = this.dataForm.get('phone')?.value;
    let address = this.dataForm.get('address')?.value;
    let department = this.dataForm.get('department')?.value;
    let agent = this.dataForm.get('agent')?.value;
    let vehicle = this.dataForm.get('vehicle')?.value;

    

    if (concessionaire === ""){
      document.getElementById("concessionaire")?.classList.add('is-invalid')
    }else if(name === ""){
      document.getElementById("name")?.classList.add('is-invalid')
    }else if(phone === ""){
      document.getElementById("phone")?.classList.add('is-invalid')
    }else if(address === ""){
      document.getElementById("address")?.classList.add('is-invalid')
    }else if(department === ""){
      document.getElementById("department")?.classList.add('is-invalid')
    }else if(vehicle === ""){
      document.getElementById("vehicle")?.classList.add('is-invalid')
    }else if(agent === ""){
      document.getElementById("agent")?.classList.add('is-invalid')
    }else{
      let jsonData = {
        name: name,
        phone: phone,
        address: address,
        department: department,
        agent: agent,
        concessionaire: concessionaire,
        vehicle: vehicle
      }
      this.http.post(this.apiUrl,jsonData).toPromise().then((result:any)=>{
        window.location.reload()
      })
    }

    
  }

}
