import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: ():IRes<IMovie[]> => apiService.get(urls.movies),
    create:(data:IMovie):IRes<IMovie> => apiService.post(urls.movies, data),
}


export {movieService}