import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from './sevice/ alertify.service';

declare let alertify: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = "Film Listesi";
  movies: Movie[]= [];
  popularMovies: Movie[]= [];
  movieRepository: MovieRepository;
  
  
  filterText:string="";
  
  constructor(public alertify: AlertifyService,
    private http: HttpClient) {
      this.movieRepository= new MovieRepository();
    this.movies= this.movieRepository.getMovies();
    this.popularMovies= this.movieRepository.getPopularMovies();

}

ngOnInit(): void {
  this.http.get<Movie[]>("http://localhost:3000/movies").subscribe((data: Movie[]) => {
    this.movies = data;


    console.log(this.movies);
    console.log(this.filterText);
  });

  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data => {
    console.log(data);
  })
}

  addToList($event: any, movie: Movie){
   if($event.target.classList.contains('btn-outline-dark')){
    $event.target.innerText="Listeden Çıkar"
    $event.target.classList.remove('btn-outline-dark');
    $event.target.classList.add('btn-danger');
    
   this.alertify.success(movie.title + 'listene eklendi');

   } 
   else{
    $event.target.innerText="Listeye Ekle"
    $event.target.classList.remove('btn-danger');
    $event.target.classList.add('btn-outline-dark');

    this.alertify.error(movie.title + 'listeden çıkarıldı')
   }
  }
}
