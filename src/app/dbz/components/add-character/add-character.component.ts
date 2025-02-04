import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({

  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],

})

export class AddCharacterComponent {

  @Output()
  public onNew: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name : '',
    power: 0
  }

  public emitCharacter(): void {

    if(this.character.name.length === 0) return;

    this.onNew.emit({...this.character}); // Ojo con pasar el objeto por referencia y no por valor

    this.character.name = '';
    this.character.power = 0;

  }

}
