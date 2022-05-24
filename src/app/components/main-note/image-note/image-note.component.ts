import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-note',
  templateUrl: './image-note.component.html',
  styleUrls: ['./image-note.component.css']
})
export class ImageNoteComponent implements OnInit {

  @Input() imageNote: any;

  
  constructor() { }
  ngOnInit(): void {
   
  }

}
