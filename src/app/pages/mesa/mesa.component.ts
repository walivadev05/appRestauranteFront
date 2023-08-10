import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/_service/mesa.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  constructor(private mesaService:MesaService){
  }

  ngOnInit(): void {
    //this.mesaService.listar();
    this.mesaService.listar().subscribe(data => {
      console.log(data);
    })
  }

}
