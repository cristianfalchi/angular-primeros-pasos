import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root' // hace que sea un singleton en toda nuestra aplicacion
})
export class DbzService {


  // Pasa por referencia
  public characters: Character[] = [  // No deberia se el lugar para mantener esta informacion
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 8000
    }

  ];   // Es importante que siempre definamos el tipo de datos

  public addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index: number): void {
  public onDeleteCharacterById(id?: string): void {

    this.characters = this.characters.filter((character) => character.id !== id);
  }

}
