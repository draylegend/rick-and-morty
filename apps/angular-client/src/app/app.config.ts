import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import appRoutes from './app.routes';

export default {
  providers: [provideRouter(appRoutes)],
} satisfies ApplicationConfig;
