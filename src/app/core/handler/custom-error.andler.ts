import { ErrorHandler } from "@angular/core";

export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    //TODO servicio de notificaciones/modales/alerts...

    console.error(error.title, error.message, error.output);
  }

}
