import {AxiosResponse} from "axios";
import {IMovie} from "../interfaces/movieInterface";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}