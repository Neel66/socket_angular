import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarComponent } from './sidebar.component';

describe('SidbarComponent', () => {
  let component: SidbarComponent;
  let fixture: ComponentFixture<SidbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidbarComponent],
    });
    fixture = TestBed.createComponent(SidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
