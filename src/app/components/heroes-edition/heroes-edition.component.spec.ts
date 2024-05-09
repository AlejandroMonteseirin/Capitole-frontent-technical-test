import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesEditionComponent } from './heroes-edition.component';

describe('HeroesEditionComponent', () => {
  let component: HeroesEditionComponent;
  let fixture: ComponentFixture<HeroesEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesEditionComponent]
    });
    fixture = TestBed.createComponent(HeroesEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
