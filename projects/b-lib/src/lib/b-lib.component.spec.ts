import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLibComponent } from './b-lib.component';

describe('BLibComponent', () => {
  let component: BLibComponent;
  let fixture: ComponentFixture<BLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
