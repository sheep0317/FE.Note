import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  noteContent = {
      id: "1",
      title: "Note 1",
      color: '#ff0000',
      text: `Note 1askhdsdksahdkahdkash asdsjakdas asdkjsa`, 
      imageNotes: [
        {
          id: "image1",
          imageUrl: "https://www.w3schools.com/howto/img_snow.jpg",
          text: `asdaskhdaskdsjahkdas saljdasldsjad image1  sadlksadlas`
        },
        {
          id: "image2",
          imageUrl: "https://www.w3schools.com/howto/img_snow.jpg",
          text: `asdaskhdaskdsjahkdas image2 asdsajdsladjsa  sadlksadlas`
        },
        {
          id: "image3",
          imageUrl: "https://www.w3schools.com/howto/img_snow.jpg",
          text: `asdaskhdaskdsjahkdas saljdasimage3sajdsladjsa  sadlksadlas`
        }
      ]
  }
  imageNoteContent(id : string){
    var imageNote = this.noteContent.imageNotes.find(imageNote => imageNote.id === id);
    return imageNote;
  }
  getElementId(id: any){
    this.clickedId = id;
  }
  clickedId: any;
  deleteImage(){
    console.log("delete image");
  }
  noteId:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteId = params['id'];
      console.log(this.noteId);
    });
  }

}
