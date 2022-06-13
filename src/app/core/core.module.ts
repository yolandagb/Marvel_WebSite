import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';
import { CustomErrorHandler } from './handler/custom-error.andler';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {provide: ErrorHandler, useClass: CustomErrorHandler}
  ],
})
export class CoreModule {}
