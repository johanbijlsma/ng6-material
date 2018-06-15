
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitedashComponent } from './sitedash.component';

describe('SitedashComponent', () => {
  let component: SitedashComponent;
  let fixture: ComponentFixture<SitedashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
