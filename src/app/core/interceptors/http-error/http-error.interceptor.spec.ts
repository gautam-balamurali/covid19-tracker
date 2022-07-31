import { TestBed } from '@angular/core/testing';
import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpError.InterceptorService', () => {
  let service: HttpErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
