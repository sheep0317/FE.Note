import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
@Injectable()
export class NoteContentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private noteService: NoteService
  ) { }
  noteId:string = "";
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteId = params['id'];
    });
    console.log(this.noteId);
    if(this.noteId != "tempNote"){
      this.noteService.getNoteContent(this.noteId).subscribe(res => {
        this.noteContent = res.data;
      }, err => {
        this.router.navigate(['/note/blank']).then(() => {
          window.location.reload();
        })
      });
    }
    
  }
  logColor(color: string){
    console.log(color);
  }
  isTempNote(){
    if (this.noteId == "tempNote"){
      return true;
    }
    return false;
  }
  isImagesNull(){
    if(this.noteContent.image.length == 0){
      return true;
    }
    return false;
  }
  noteContent = {
    _id: "",
    note_title: "",
    note_content: "",
    color: "",
    image: [
      {
        _id: "",
        image_title: "",
        image_url: "",
        image_caption: ""
      }
    ]
  }

  getElementId(id: any){
    this.clickedId = id;
  }
  imageNoteContent(id : string){
    var imageNote = this.noteContent.image.find(image => image._id === id);
    if (imageNote){
      return imageNote;
    }
    return {caption: "", image_url: "", _id: ""};
  }
  onWheel(event: WheelEvent){
    if (event.deltaY > 0) document.getElementById('current-image')!.scrollLeft += 100;
    else document.getElementById('current-image')!.scrollLeft -= 100;
  }
  clickedId: any;
  //Function
  deleteImage(id: string){
    var data = {
      id: this.noteContent._id,
      imageNoteId: id
    }
    this.noteService.deleteImageNote(data).subscribe(res => {
      window.location.reload();
    })
  }
  deleteNote(noteId: any){
    this.noteService.deleteNote(noteId).subscribe(res => {
      this.router.navigate(['/note/blank']).then(() => {
        window.location.reload();
      });
    })

  }
  saveNote(color:string){
    var title = (<HTMLInputElement>document.getElementById('noteTitle')).value;
    var text = (<HTMLInputElement>document.getElementById('noteContent')).innerHTML;
  
    if (this.isTempNote()){
      var note = {
        note_title: title,
        note_content: text,
        color: color
      }
      this.noteService.createNewNote(note).subscribe(res => {
        this.router.navigate(['/note/'+ res.data]).then(() => {
          window.location.reload();
        });
      })
    }else{
      this.noteContent.note_title = title;
      this.noteContent.note_content = text;
      this.noteContent.color = color;
      this.noteService.updateNote(this.noteContent).subscribe(res => {
        window.location.reload();
      })
    }
    
    
  }
  saveImage(title:string, caption: string, imageUrl: string){
    var image = {
      image_title: title,
      image_url: imageUrl,
      image_caption: caption
    }
    var data = {
      id: this.noteContent._id,
      image: image
    }
    this.noteService.createNewImageNote(data).subscribe(res => {
      console.log(res);
      window.location.reload();
    })
    
  }
  loadImage(imageUrl: string){
    if(imageUrl){
      (<HTMLImageElement>document.getElementById('temp-image')).src = imageUrl;
    }
  }
}
