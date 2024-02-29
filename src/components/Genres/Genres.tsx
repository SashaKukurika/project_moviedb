import React, { FC } from "react";
import {IGenres} from "../../interfaces";

interface GenreProps {
    genre: IGenres;
}

const Genres: FC<GenreProps> = ({ genre }) => {
    const {name, id} = genre;
    return(
    <div>
        <div>name: {name}</div>
        <div>id: {id}</div>
    </div>
);
}

export {Genres};
