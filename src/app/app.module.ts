import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ensure these paths and component names are correct
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppComponent } from './app.component'; // Make sure this matches the class name in app.component.ts
import { ItemTesteComponent } from './item-teste/item-teste.component';

@NgModule({
  declarations: [AppComponent, ItemTesteComponent, ItemDetailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
