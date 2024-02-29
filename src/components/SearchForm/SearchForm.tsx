import {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {movieService} from "../../services";
import {MovieListCard} from "../MovieListCard";
import {IResult} from "../../interfaces";

const SearchForm: FC = () => {
    const [searchedMovies, setSearchedMovies] = useState<IResult[]>(null)
    const {register, handleSubmit, reset} = useForm({
        mode: "onSubmit",
        // resolver: joiResolver(searchValidator)
        // todo валідатор
    });

    const search: SubmitHandler<any> = async ({searchWords}) => {
        movieService.search(searchWords).then(({data})=> {
            setSearchedMovies(data.results)
        })
        reset();
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(search)}>
                    <input type="text"
                           placeholder={'Find movie'} {...register('searchWords')}/>
                    <button>Search</button>
                </form>
            </div>
            {searchedMovies && searchedMovies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchForm};