import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren{

}

const ContextProvider:FC<IProps> = ({children}) => {
    return (
        <div>
            ContextProvider
        </div>
    );
};

export {ContextProvider};