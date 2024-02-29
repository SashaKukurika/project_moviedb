import {useParams} from "react-router-dom";
import {MovieDetails} from "../../components/MovieDetails/MovieDetails";

const MovieInfoPage = () => {
    const {id} = useParams();
    return (
        <div>
            <MovieDetails key={id} id={+id}/>
        </div>
    );
};

export {MovieInfoPage};