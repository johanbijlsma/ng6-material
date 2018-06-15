
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitetableComponent } from './sitetable.component';

describe('SitetableComponent', () => {
  let component: SitetableComponent;
  let fixture: ComponentFixture<SitetableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
