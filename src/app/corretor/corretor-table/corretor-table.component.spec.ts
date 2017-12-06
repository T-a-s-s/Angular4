import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorTableComponent } from './corretor-table.component';

describe('CorretorTableComponent', () => {
  let component: CorretorTableComponent;
  let fixture: ComponentFixture<CorretorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
