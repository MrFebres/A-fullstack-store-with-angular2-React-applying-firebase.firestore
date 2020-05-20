import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetComponent } from './prod-det.component';

describe('ProdDetComponent', () => {
  let component: ProdDetComponent;
  let fixture: ComponentFixture<ProdDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
