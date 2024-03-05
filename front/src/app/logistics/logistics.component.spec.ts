import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogisticsComponent } from './logistics.component';

describe('LogisticsComponent', () => {
  let component: AddLogisticsComponent;
  let fixture: ComponentFixture<AddLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
