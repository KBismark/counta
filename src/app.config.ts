import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                semantic: {
                    primary: {
                        50: '{zinc.50}',
                        100: '{zinc.100}',
                        200: '{zinc.200}',
                        300: '{zinc.300}',
                        400: '{zinc.500}',
                        500: '{zinc.900}',
                        600: '{zinc.800}',
                        700: '{zinc.700}',
                        800: '{zinc.800}',
                        900: '{zinc.900}',
                        950: '{zinc.950}'
                    }
                }
            },
            dark: {
                semantic: {
                   
                }
            }
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: MyPreset, options: { darkModeSelector: '.app-dark' } } })
    ]
};
