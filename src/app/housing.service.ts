import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  URL = 'http://localhost:3000/locations';

  constructor() { }

  housingLocationList: HousingLocation[] = [];

 async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.URL);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise <HousingLocation | undefined>{
    const data = await fetch(`${this.URL}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Cadastar-se para alugar a casa: Primeiro nome: ${firstName}, Sobrenome: ${lastName}, E-mail: ${email}.`);
  }
}
