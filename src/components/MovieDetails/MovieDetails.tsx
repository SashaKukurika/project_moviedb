import {FC, useEffect, useState} from 'react';
import {movieService} from "../../services";
import {IResult} from "../../interfaces";
import {urls} from "../../constants";

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
// todo вивести дані які хочеш це один мувік і стилізувати
    return (
        <div>
            {movie?.title}
            <img src={`${urls.poster}${movie?.poster_path}`} alt={`${movie?.title}`}/>
        </div>
    );
};

export {MovieDetails};