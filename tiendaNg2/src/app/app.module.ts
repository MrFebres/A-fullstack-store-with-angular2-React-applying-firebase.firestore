import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*FIRESTORE*/
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/*COMPONENTES*/ 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterPipe } from './filter.pipe';
import { ProdDetComponent } from './components/prod-det/prod-det.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopnavComponent,
    ProductListComponent,
    FilterPipe,
    ProdDetComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
