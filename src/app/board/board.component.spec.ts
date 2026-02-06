import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate 441 cells', () => {
    expect(component.grid.length).toBe(441);
  });

  it('should generate 7 easel letters', () => {
    expect(component.easels.length).toBe(7);
  });

  it('should fill the letter bag with 102 letters', () => {
    expect(component.letterBag.length).toBe(102);
  });
});
