import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../housinglocation';
import { HousingService } from '../../housing.service';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  housingLocation: HousingLocation | undefined;

  constructor(public activatedRoute: ActivatedRoute, private housingService: HousingService){
    const housingLocationID = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationID).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  // Campos do formulário.
  applyForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    }
  );

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
