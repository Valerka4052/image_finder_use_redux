import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getLargeImage } from 'redux/largeImage/slice';
import { modalShow } from 'redux/showModal/slice';

export function ImageGallery() {
    const pictures = useSelector(state => state.pictures)
    const dispatch = useDispatch()

    function getLargeImg(e) {
    dispatch(getLargeImage(e.target.id))
        if (e.target.nodeName === 'IMG') {
        dispatch(modalShow())
        };
    };

    return (
        <List onClick={(e)=>getLargeImg(e)}>
            {pictures.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem  key={id}
                    imageUrl={webformatURL}
                    largeImageURL={largeImageURL} />
            })}
        </List>
    );
};

