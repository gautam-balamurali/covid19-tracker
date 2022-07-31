import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListDropdownComponent } from './countries-list-dropdown.component';

describe('CountriesListDropdownComponent', () => {
  let component: CountriesListDropdownComponent;
  let fixture: ComponentFixture<CountriesListDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesListDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
