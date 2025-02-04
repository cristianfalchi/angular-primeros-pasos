import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


// <dbz-list [characterList]="characters"></dbz-list>

export class ListComponent {

  // Para recibir informacion desde el exterior. Puede recibir una propertie llamada characterList
  @Input()
  public characterList: Character[] = []  // Si no me mandan nada mi valor por defecto es vacio

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  public onDeleteCharacter(id?: string): void {

    if (!id) return;
    this.onDelete.emit(id);

  }

}


// Voy a definir la informacion que el listado tiene que usar para renderizar
