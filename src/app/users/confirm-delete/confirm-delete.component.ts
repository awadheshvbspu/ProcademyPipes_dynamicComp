// import { Component } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../Models/user';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent implements OnInit{
  @Input() usertoDelete: User;

  @Output()
  OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  OnConfirmationBtmClicked(value: boolean){
    console.log(value);
    this.OnConfirmation.emit(value);
  }
}
