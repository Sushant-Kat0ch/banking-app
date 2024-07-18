import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceEnqueryComponent } from './balance-enquery.component';

describe('BalanceEnqueryComponent', () => {
  let component: BalanceEnqueryComponent;
  let fixture: ComponentFixture<BalanceEnqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceEnqueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
