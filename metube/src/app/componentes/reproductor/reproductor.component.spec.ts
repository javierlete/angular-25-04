import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorComponent } from './reproductor.component';
import { provideRouter } from '@angular/router';

describe('ReproductorComponent', () => {
  let component: ReproductorComponent;
  let fixture: ComponentFixture<ReproductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReproductorComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
