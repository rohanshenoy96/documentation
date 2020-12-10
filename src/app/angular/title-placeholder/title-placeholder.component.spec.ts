import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePlaceholderComponent } from './title-placeholder.component';

describe('TitlePlaceholderComponent', () => {
  let component: TitlePlaceholderComponent;
  let fixture: ComponentFixture<TitlePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
