import { NgModule } from '@angular/core';
import { MainNoteComponent } from './components/main-note/main-note.component';
import { BlankPageComponent } from './components/main-note/blank-page/blank-page.component';
import { AddPageComponent } from './components/main-note/add-page/add-page.component';
import { NoteContentComponent } from './components/main-note/note-content/note-content.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path: 'note', component: MainNoteComponent, children: [
    {path: '', component: BlankPageComponent},
    {path: 'blank', component: BlankPageComponent},
    {path: 'add', component: AddPageComponent},
    {path: ':id', component: NoteContentComponent}
  ]},
  {path: '', redirectTo: '/note', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
