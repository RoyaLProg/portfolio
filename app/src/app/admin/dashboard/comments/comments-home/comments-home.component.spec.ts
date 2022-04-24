import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsHomeComponent } from './comments-home.component';

describe('CommentsHomeComponent', () => {
  let component: CommentsHomeComponent;
  let fixture: ComponentFixture<CommentsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
