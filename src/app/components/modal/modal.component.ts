import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private noteService: NoteService, private router: Router) { }
  notes = [
    {
      _id: "",
      note_title: "",
      color: "",
    }
  ];
  username: any;
  saveName(name: string){
    this.username = name;
    localStorage.setItem('username', name);
    console.log(this.username);
  }
  redirectToNote(id: string){
    this.router.navigate(['/note', id])
    .then(() => {
      window.location.reload();
    });
  }
  newNote(){
    this.router.navigate(['/note', "tempNote"])
    .then(() => {
      window.location.reload();
    });
  }
  imageUrl: string = "https://www.w3schools.com/howto/img_snow.jpg";
  ngOnInit(): void {
    this.noteService.getAllNoteTitle().subscribe(res => {
      this.notes = res.data;
    })
    this.username = localStorage.getItem('username');
  }

}
