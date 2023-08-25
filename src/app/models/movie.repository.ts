import { Movie } from "./movie"; 

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies= [
        {id: 1, title:"film 1", description:"film1 açıklama", imageUrl: "1.jpeg", isPopular:false },
        {id: 2, title:"film 2", description:"film2 açıklama", imageUrl: "2.jpeg", isPopular:true},
        {id: 3, title:"film 3", description:"film3 açıklama", imageUrl: "3.jpeg", isPopular:false},
        {id: 4, title:"film 4", description:"film4 açıklama", imageUrl: "4.jpeg", isPopular:true }
    ];
    }

    //bana tüm film bilgilerini getir şeklinde bir method
    //method geriye bir liste döndürecek
    getMovies(): Movie[]{
        return this.movies;
    }
    
    getPopularMovies(): Movie[] {
        return this.movies.filter(i=>i.isPopular);

    }



    //ben sana bir id göndereceğim sen de bana movie göndereceksin
    getMovieById(id:number): Movie {
        return this.movies.find(i=> i.id==id);
    }
}