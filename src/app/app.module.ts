import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { MainNoteComponent } from './components/main-note/main-note.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ImageNoteComponent } from './components/main-note/image-note/image-note.component';
import { BlankPageComponent } from './components/main-note/blank-page/blank-page.component';
import { AddPageComponent } from './components/main-note/add-page/add-page.component';
import { NoteContentComponent } from './components/main-note/note-content/note-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    MainNoteComponent,
    PagenotfoundComponent,
    ImageNoteComponent,
    BlankPageComponent,
    AddPageComponent,
    NoteContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
