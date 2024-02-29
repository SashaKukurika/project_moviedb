import React, {FC, useEffect, useState} from "react";
import {genresService} from "../../services/genresService";
import {IGenres} from "../../interfaces";
import {Genre} from "../../components/Genre/Genre";


const GenresPage: FC = () => {
    const [data, setData] = useState<IGenres>(null);

    useEffect(() => {
        genresService.getAll().then(({data}) => {
            setData(data)
            console.log(data);
        }).catch(error => {
            console.error("Помилка отримання фільмів:", error);
        });
    }, []);
    return (
        <div>
            {data?.genres.map((genre)=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};


export { GenresPage };
