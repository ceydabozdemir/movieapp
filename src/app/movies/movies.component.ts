import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "Film Listesi";
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  
  filterText:string="";
  


  constructor() {
    this.movieRepository= new MovieRepository();
    this.movies= this.movieRepository.getMovies();
    this.popularMovies= this.movieRepository.getPopularMovies();
  }
  ngOnInit():void {

  }
  // movies = ["film 1", "film 2", "film 3", "film 4"]

  addToList($event: any, movie: Movie){
   if($event.target.classList.contains('btn-outline-dark')){
    $event.target.innerText="Listeden Çıkar"
    $event.target.classList.remove('btn-outline-dark');
    $event.target.classList.add('btn-danger');
   } else{
    $event.target.innerText="Listeye Ekle"
    $event.target.classList.remove('btn-danger');
    $event.target.classList.add('btn-outline-dark');
   }
  }
}
