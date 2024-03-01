import {FC, useEffect, useState} from 'react';
import {movieService} from "../../services";
import {IResult} from "../../interfaces";
import {urls} from "../../constants";
import {GenreBadge} from "../GenreBage/GenreBadge";

interface IProps {
 id: number
}

const MovieDetails: FC<IProps> = ({id}) => {
    console.log(id)
    const [movie, setMovie] = useState<IResult>(null)
    useEffect(() => {
        movieService.getById(id).then(({data} )=> {
            setMovie(data)
        })
    }, [id]);
    console.log(movie?.genres)
// todo вивести дані які хочеш це один мувік і стилізувати
    return (
        <div>
            {movie?.title}
            {movie?.genres.map((genre) => <GenreBadge key={genre.id} genreName={genre.name}/>)}
            <img src={`${urls.poster}${movie?.poster_path}`} alt={`${movie?.title}`}/>
        </div>
    );
};

export {MovieDetails};