import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Res } from '../models/res.model';
const AUTH_API = '';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http:HttpClient) { }
    getAllNoteTitle(id: string): Observable<Res> {
        return this.http.get<Res>(AUTH_API + '/allNoteTitle/' + id);
    }
    getNoteContent(id: string): Observable<Res> {
        return this.http.get<Res>(AUTH_API + '/note/' + id);
    }
    createNewNote(note: any): Observable<Res> {
        return this.http.post<Res>(AUTH_API + '/note', note);
    }
    updateNote(note: any): Observable<Res> {
        return this.http.put<Res>(AUTH_API + '/note', note);
    }
    deleteNote(id: string): Observable<Res> {
        return this.http.delete<Res>(AUTH_API + '/note/' + id);
    }
    deleteImageNote(id: string): Observable<Res> {
        return this.http.delete<Res>(AUTH_API + '/imageNote/' + id);
    }
    createNewImageNote(imageNote: any): Observable<Res> {
        return this.http.post<Res>(AUTH_API + '/imageNote', imageNote);
    }
}
