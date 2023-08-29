import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasferBalanceComponent } from './trasfer-balance.component';

describe('TrasferBalanceComponent', () => {
  let component: TrasferBalanceComponent;
  let fixture: ComponentFixture<TrasferBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasferBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasferBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
