import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcteamComponent } from './octeam.component';

describe('OcteamComponent', () => {
  let component: OcteamComponent;
  let fixture: ComponentFixture<OcteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
