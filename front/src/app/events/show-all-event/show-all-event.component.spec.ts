import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllEventComponent } from './show-all-event.component';

describe('ShowAllEventComponent', () => {
  let component: ShowAllEventComponent;
  let fixture: ComponentFixture<ShowAllEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
