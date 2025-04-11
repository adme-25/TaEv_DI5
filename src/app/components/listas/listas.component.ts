import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
  standalone: false
})
export class ListasComponent  implements OnInit {
@Input() datosLista: any[] = [];
  constructor() { }

  ngOnInit() {}

}
