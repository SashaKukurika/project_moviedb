import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres} from "../interfaces";


const genresService = {
    getAll: ():IRes<IGenres[]> => apiService.get(urls.genres),
    getById: (id: number, page = 1) :IRes<IGenres> => apiService.get(`${urls.movies}?with_genres=${id}`, {params: {page}})
}


export {genresService}