import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastillaComponent } from './pastilla.component';

describe('PastillaComponent', () => {
  let component: PastillaComponent;
  let fixture: ComponentFixture<PastillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
