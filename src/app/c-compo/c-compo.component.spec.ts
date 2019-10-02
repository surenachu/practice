import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompoComponent } from './c-compo.component';

describe('CCompoComponent', () => {
  let component: CCompoComponent;
  let fixture: ComponentFixture<CCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
