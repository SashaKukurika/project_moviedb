import React, { FC, useEffect, useState } from "react";
import { genresService } from "../../services/genresService";
import {IResult} from "../../interfaces";
import {Genres} from "../../components/Genres/Genres";


const GenresPage: FC = () => {
    const [data, setData] = useState<IResult>(null);

    useEffect(() => {
        genresService.getById(+data).then(({data}) => {
            setData(data as any as IResult)
        }).catch(error => {
            console.error("Помилка отримання фільмів:", error);
        });
        console.log(data);
    }, [data]);
    return (
        <div>
            {data?.genre_ids.map((genre) => <Genres key={genre.id} genre={genre} />)}
        </div>
    );
};


export { GenresPage };
