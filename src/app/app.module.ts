import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { InitPage } from '../pages/init/init';
import { IntroPage } from '../pages/intro/intro';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { ChatEditPage } from '../pages/chat-edit/chat-edit';
import { SettingsPage } from '../pages/settings/settings';
import { CodeRedeemPage } from '../pages/code-redeem/code-redeem';
import { LengthBreakPipe } from "../pipes/length-break/length-break";

import { ApiProvider } from '../providers/api/api';

import { AppVersion } from '@ionic-native/app-version';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

// http://ionicframework.com/docs/developer-resources/ng2-translate/
import { TranslateModule } from '@ngx-translate/core';

// http://ionicframework.com/docs/native/native-storage/
import { NativeStorage } from '@ionic-native/native-storage';

// https://ionicframework.com/docs/native/camera/
import { Camera } from '@ionic-native/camera';

// https://ionicframework.com/docs/native/keyboard/
import { Keyboard } from '@ionic-native/keyboard';

import { ParticlesProvider } from '../providers/particles/particles';
import { AppStateProvider } from '../providers/app-state/app-state';
import { AppPersistenceProvider } from '../providers/app-persistence/app-persistence';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// https://github.com/konfetti-app/konfetti-app/issues/20
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MainPageModule } from '../pages/main/main.module'
import { AppConfigProvider } from '../providers/app-config/app-config';

@NgModule({
  declarations: [
    MyApp,
    InitPage,
    IntroPage,
    LoginPage,
    ProfilePage,
    SettingsPage,
    ChatPage,
    ChatEditPage,
    CodeRedeemPage,
    LengthBreakPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    MainPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InitPage,
    MainPage,
    IntroPage,
    ProfilePage,
    CodeRedeemPage,
    LoginPage,
    ChatPage,
    ChatEditPage,
    SettingsPage
  ],
  providers: [
    AppVersion,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    NativeStorage,
    Camera,
    Keyboard,
    AppPersistenceProvider,
    AppStateProvider,
    //BarcodeScanner,
    ParticlesProvider,
    AppConfigProvider,
    AppConfigProvider
  ]
})
export class AppModule {}
