import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[];

    constructor(){
        this.categories = [
            {id:1, name:"bilim kurgu"},
            {id:2, name:"korku"},
            {id:3, name:"romantik"},
            {id:4, name:"komedi"},
            {id:5, name:"drama"},
           ];
    }
    getCategories(): Category[]{
        return this.categories;
    }
}