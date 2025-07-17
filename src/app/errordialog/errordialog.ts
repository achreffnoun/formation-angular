import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-errordialog',
  imports: [],
  templateUrl: './errordialog.html',
  styleUrl: './errordialog.scss'
})
export class Errordialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

}
