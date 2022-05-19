import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
  notes = [
    {id:"1", color: '#ff0000', text: 'Note 1'},
    {id:"2", color: '#00ff00', text: 'Note 2'},
    {id:"3", color: '#0000ff', text: 'Note 3'},
  ]
  imageUrl: string = "https://www.w3schools.com/howto/img_snow.jpg";
  ngOnInit(): void {
  }

}
