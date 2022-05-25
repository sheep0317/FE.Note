import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Res } from '../models/res.model';
const AUTH_API = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

    constructor(private http:HttpClient) { }
    getAllNoteTitle(): Observable<Res> {
        return this.http.get<Res>(AUTH_API + '/notes/');
    }
    getNoteContent(id: string): Observable<Res> {
        return this.http.get<Res>(AUTH_API + '/note/' + id);
    }
    createNewNote(note: any): Observable<Res> {
        return this.http.post<Res>(AUTH_API + '/note/save', note);
    }
    updateNote(note: any): Observable<Res> {
        return this.http.put<Res>(AUTH_API + '/note/update/'+ note._id , note);
    }
    deleteNote(id: string): Observable<Res> {
        return this.http.delete<Res>(AUTH_API + '/note/delete/' + id);
    }
    deleteImageNote(data: any): Observable<Res> {
        return this.http.post<Res>(AUTH_API + '/note/delete-image/', data);
    }
    createNewImageNote(data: any): Observable<Res> {
        return this.http.post<Res>(AUTH_API + '/note/new-image/' , data);
    }
}
