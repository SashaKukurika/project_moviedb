import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {genresService} from "../../services/genresService";
import {IResult} from "../../interfaces";
import {MovieDetails} from "../MovieDetails/MovieDetails";
import {Pagination} from "../Pagination/Pagination";

interface IProps {
id: string
}

const SelectedGenres: FC<IProps> = ({id}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page')
    const [movies, setMovies] = useState<IResult[]>(null)
    useEffect(() => {
        genresService.getById(+id, +query.get('page')).then(({data}) => {
            setMovies(data.results)
            console.log(data)
        })
    }, [id,page]);
    return (
        <div>
            {movies && movies.map(movie => <MovieDetails key={movie.id} id={movie.id}/>)}
            <Pagination totalCount={500*20} pageSize={20} currentPage={+query.get('page')} onPageChange={(page) =>
                setQuery((value) => {
                    value.set('page', page.toString());
                    return value;
                })
            }/>
        </div>
    );
};

export {SelectedGenres};