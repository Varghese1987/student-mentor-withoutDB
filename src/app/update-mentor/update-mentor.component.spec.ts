import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMentorComponent } from './update-mentor.component';

describe('UpdateMentorComponent', () => {
  let component: UpdateMentorComponent;
  let fixture: ComponentFixture<UpdateMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
