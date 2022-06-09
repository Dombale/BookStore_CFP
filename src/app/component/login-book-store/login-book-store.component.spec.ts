import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBookStoreComponent } from './login-book-store.component';

describe('LoginBookStoreComponent', () => {
  let component: LoginBookStoreComponent;
  let fixture: ComponentFixture<LoginBookStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBookStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
