import { Movie } from "./movie"; 

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies= [
        {id: 1, title:"film 1", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis tempora voluptatum eius at dolorum ab dolorem quisquam eveniet commodi ducimus. Voluptates sint provident veniam impedit laudantium, ut quaerat quae consequatur!", imageUrl: "1.jpeg", isPopular:false, datePublished: new Date(2022,16,12) },
        {id: 2, title:"film 2", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis tempora voluptatum eius at dolorum ab dolorem quisquam eveniet commodi ducimus. Voluptates sint provident veniam impedit laudantium, ut quaerat quae consequatur!", imageUrl: "2.jpeg", isPopular:true, datePublished: new Date(2022,16,12)},
        {id: 3, title:"film 3", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis tempora voluptatum eius at dolorum ab dolorem quisquam eveniet commodi ducimus. Voluptates sint provident veniam impedit laudantium, ut quaerat quae consequatur!", imageUrl: "3.jpeg", isPopular:false, datePublished: new Date(2022,16,12)},
        {id: 4, title:"film 4", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis tempora voluptatum eius at dolorum ab dolorem quisquam eveniet commodi ducimus. Voluptates sint provident veniam impedit laudantium, ut quaerat quae consequatur!", imageUrl: "4.jpeg", isPopular:true, datePublished: new Date(2022,16,12) }
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