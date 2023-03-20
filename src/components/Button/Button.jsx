import { useDispatch } from "react-redux";
import { LoadButton } from './Button.styled';
import { changePage } from "redux/page/slice";

export function Button() {
    const dispatch = useDispatch()

    return (
        <LoadButton type="button" onClick={()=>dispatch(changePage(1))}>Load more</LoadButton>
    );
};

