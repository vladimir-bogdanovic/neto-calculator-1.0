import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
    this.cradesWeight = parseFloat(
      (this.calculateForm.value.numberOfCrades * this.cradeWeight).toFixed(2)
    );
    this.netoMass = parseFloat(
      (this.calculateForm.value.brutoMass - this.cradesWeight).toFixed(2)
    );
  }

  resetForm() {
    console.log('asd');
    this.calculateForm.reset();
  }
}
