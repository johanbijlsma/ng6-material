
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitenavComponent } from './sitenav.component';

describe('SitenavComponent', () => {
  let component: SitenavComponent;
  let fixture: ComponentFixture<SitenavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
