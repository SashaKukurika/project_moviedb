import {useParams} from "react-router-dom";

const MovieInfoPage = () => {
    const {id} = useParams();
    return (
        <div>
            <MovieDetails key={id} id={id}/>
        </div>
    );
};

export {MovieInfoPage};