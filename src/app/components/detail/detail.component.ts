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
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia magnolias Escuintla, Escuintla",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia ma",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia magnolias Escuintla",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia magnolias Escuintla, Escuintla",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia magnolias Escuintla, Escuintla",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia magnolias Escuintla, Escuintla",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    },
    {
      name: "Juan Pablo Ardon Lopez",
      phone: 30237820,
      address: "14 calle 7-05 zona 5 colonia magnolias Escuintla, Escuintla",
      department: "Escuintla",
      agent: "Luis Bolaños",
      concessionaire: "Concesionario Sur",
      vehicle: "Mazda 3"
    }
  ]

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

}
