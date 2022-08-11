import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  data = [
    {
      name: "Nombre cliente",
      phone: 12345678,
      address: "Dirección Cliente",
      department: "Departamento Cliente",
      agent: "Nombre Agente",
      concessionaire: "Nombre Concesionario",
      vehicle: "Descripción Vehículo"
    }
  ]

  apiUrl:string = "https://nameless-escarpment-55713.herokuapp.com/info"

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.http.get(this.apiUrl).subscribe((res:any)=>{
      this.data = res
    })
  }



}
