import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie, IResult} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: (page: number = 1):IRes<IMovie[]> => apiService.get(urls.movies, {params: {page}}),
    search: (word: string) => apiService.get(`${urls.search}${word}`),
    getById: (id: number): IRes<IResult> => apiService.get(`${urls.movies}/${id}`)
}


export {movieService}