import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalResourceDetailComponent } from './local-resource-detail.component';

describe('LocalResourceDetailComponent', () => {
  let component: LocalResourceDetailComponent;
  let fixture: ComponentFixture<LocalResourceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalResourceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalResourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
