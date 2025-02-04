import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})


export class MainPageComponent {

  // Hacemos la inyeccion de dependecnias
  // Nuestro servicio esta protegido
  constructor(private dbzService: DbzService) { }

  get characters(): Character[] { // definimos una propiedad como un metodo
    // return this.dbzService.characters;  de esta manera modificamos los characteres directamente
    return [...this.dbzService.characters]; // aca generamos una copia de la informacion
  }

  onDeleteCharacter(id: string):void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
