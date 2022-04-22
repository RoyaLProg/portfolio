import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNewComponent } from './github-new.component';

describe('GithubNewComponent', () => {
  let component: GithubNewComponent;
  let fixture: ComponentFixture<GithubNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
