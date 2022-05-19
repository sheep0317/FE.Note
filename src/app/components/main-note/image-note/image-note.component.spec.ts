import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNoteComponent } from './image-note.component';

describe('ImageNoteComponent', () => {
  let component: ImageNoteComponent;
  let fixture: ComponentFixture<ImageNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
