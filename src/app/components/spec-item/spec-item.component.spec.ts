import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecItemComponent } from './spec-item.component';

describe('SpecItemComponent', () => {
  let component: SpecItemComponent;
  let fixture: ComponentFixture<SpecItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
