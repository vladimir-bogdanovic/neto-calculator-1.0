import { NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-neto',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './neto.component.html',
  styleUrl: './neto.component.css',
})
export class NetoComponent implements OnInit {
  // brutoMass: number = 0;
  // numCrates: number = 0;
  // netoMass: number | null = null;
  // massOfCrates: number | null = null;
  // calculateMass(): void {
  //   const crateWeight = 0.4; // weight of one crate in kg
  //   this.massOfCrates = this.numCrates * crateWeight;
  //   this.netoMass = this.brutoMass - this.massOfCrates;
  // }

  constructor() {}

  calculateForm!: FormGroup;
  cradeWeight: number = 0.4;

  netoMass!: number;
  cradesWeight!: number;

  ngOnInit(): void {
    this.calculateForm = new FormGroup({
      brutoMass: new FormControl(null, Validators.required),
      numberOfCrades: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    // this.cradesWeight =
    //   this.calculateForm.value.numberOfCrades * this.cradeWeight;
    // this.netoMass = this.calculateForm.value.brutoMass - this.cradesWeight;
    this.cradesWeight = parseFloat(
      (this.calculateForm.value.numberOfCrades * this.cradeWeight).toFixed(2)
    );
    this.netoMass = parseFloat(
      (this.calculateForm.value.brutoMass - this.cradesWeight).toFixed(2)
    );

    //this.calculateForm.reset();
  }

  resetForm() {
    this.calculateForm.reset();
  }
}
