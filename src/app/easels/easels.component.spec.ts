import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaselsComponent } from './easels.component';

describe('EaselsComponent', () => {
  let component: EaselsComponent;
  let fixture: ComponentFixture<EaselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
