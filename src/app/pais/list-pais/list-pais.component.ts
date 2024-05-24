import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-list-pais',
  templateUrl: './list-pais.component.html',
  styleUrls: ['./list-pais.component.css']
})
export class ListPaisComponent implements OnInit {
  paises: Pais[] = [];
  paisMasAntiguo: string = ''; // Asignar un valor inicial a 'paisMasAntiguo'
  anioFormacionMasAntiguo: number = 0;

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.getPaises();
  }

  getPaises() {
    this.paisService.getPaises().subscribe(data => {
      this.paises = data;

      if (this.paises.length > 0) {
        let paisAntiguo = this.paises[0];
        this.paises.forEach(pais => {
          if (pais.anioFormacion < paisAntiguo.anioFormacion) {
            paisAntiguo = pais;
          }
        });
        this.paisMasAntiguo = paisAntiguo.nombre;
        this.anioFormacionMasAntiguo = paisAntiguo.anioFormacion;
      }
    });
  }
}
