import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-detail-pais',
  templateUrl: './detail-pais.component.html',
  styleUrls: ['./detail-pais.component.css']
})
export class DetailPaisComponent implements OnInit {
  @Input() pais: Pais;

  constructor() { }

  ngOnInit(): void { }
}