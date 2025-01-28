import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"friendlybugs-ed0f8","appId":"1:680911224639:web:7729714235215c08c59d8a","storageBucket":"friendlybugs-ed0f8.firebasestorage.app","apiKey":"AIzaSyCwbBoUjWbGyRasxOhWHyH8Q-bOXaauvOM","authDomain":"friendlybugs-ed0f8.firebaseapp.com","messagingSenderId":"680911224639","measurementId":"G-SBTW9JMNS7"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
