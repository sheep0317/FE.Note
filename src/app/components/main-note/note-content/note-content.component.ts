import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }
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
        },
        {
          id: "image4",
          imageUrl: "https://www.w3schools.com/howto/img_snow.jpg",
          text: `asdaskhdaskdsjahkdas saljdasimage4sajdsladjsa  sadlksadlas`
        },
        {
          id: "image5",
          imageUrl: "https://www.w3schools.com/howto/img_snow.jpg",
          text: `asdaskhdaskdsjahkdas saljdasimage5sajdsladjsa  sadlksadlas`

        },
        {
          id: "image6",
          imageUrl: "https://www.w3schools.com/howto/img_snow.jpg",
          text: `asdaskhdaskdsjahkdas saljdasimage6sajdsladjsa  sadlksadlas`

        }
      ]
  }
  noteId:any;
  getElementId(id: any){
    this.clickedId = id;
  }
  imageNoteContent(id : string){
    var imageNote = this.noteContent.imageNotes.find(imageNote => imageNote.id === id);
    if (imageNote){
      return imageNote;
    }
    return {text: "", imageUrl: "", id: ""};
  }
  onWheel(event: WheelEvent){
    if (event.deltaY > 0) document.getElementById('current-image')!.scrollLeft += 100;
    else document.getElementById('current-image')!.scrollLeft -= 100;
  }
  clickedId: any;
  //Function
  deleteImage(id: string){
    console.log("delete image");
  }
  deleteNote(noteId: any){
    console.log("delete note");
    this.router.navigate(['/note/blank']);
  }
  saveNote(){
    var title = (<HTMLInputElement>document.getElementById('noteTitle')).value;
    var text = (<HTMLInputElement>document.getElementById('noteContent')).innerHTML;
    console.log("title:",title);
    console.log("text:",text);
  }
  saveImage(caption: string, imageUrl: string){
    console.log(imageUrl, caption);
  }
  loadImage(imageUrl: string){
    if(imageUrl){
      (<HTMLImageElement>document.getElementById('temp-image')).src = imageUrl;
    }
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteId = params['id'];
    });
  }

}
