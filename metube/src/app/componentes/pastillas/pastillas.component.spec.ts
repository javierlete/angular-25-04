import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastillasComponent } from './pastillas.component';

describe('PastillasComponent', () => {
  let component: PastillasComponent;
  let fixture: ComponentFixture<PastillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
