import {FC} from 'react';
import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
genre: IGenre
}

const Genre: FC<IProps> = ({genre:{id,name}}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`${id}`);
    };
    // todo стилізація
    return (
        <div onClick={handleCardClick}>
            {name}
        </div>
    );
};

export {Genre};