import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { AlertifyService } from './movies/sevice/ alertify.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //component
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe
  ],
  imports: [  //module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [AlertifyService],  //services
  bootstrap: [AppComponent] //starter component
})
export class AppModule { }
