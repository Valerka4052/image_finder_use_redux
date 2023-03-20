import { useEffect } from 'react';
import { getApi, ItemsPerPage } from '../api'
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getPicture, clearPictures } from 'redux/pictures/slice';
import { loadingTrue, loadingFalse } from 'redux/loading/slice';
import { lastPageTrue, lastPageFalse } from 'redux/lastPage/slice';

export const App = () => {
  const dispatch = useDispatch();
  const pictures = useSelector(state => state.pictures);
  const page = useSelector(state => state.page);
  const showModal = useSelector(state => state.showModal);
  const searchQuerry = useSelector(state => state.searchQuerry);
  const loading = useSelector(state => state.loading);
  const lastPage = useSelector(state => state.lastPage);

// для кнопки Load more----------------------------
  useEffect(() => {
    if (page > 1 && searchQuerry !== '') {
      dispatch(loadingTrue()); getApi(searchQuerry, page).then((array) => {
        if (array.length < ItemsPerPage) { dispatch(lastPageTrue()) }
        dispatch(getPicture(array));
        dispatch(loadingFalse())
      });
    };
  }, [dispatch, page, searchQuerry]);

// Для кнопки Search  ------------------------------
  useEffect(() => {
    if (searchQuerry !== '') {
       dispatch(clearPictures())
      dispatch(loadingTrue()); getApi(searchQuerry, 1)
        .then((array) => {
          if (array.length < ItemsPerPage && array.length > 0) { dispatch(lastPageTrue()) };
          if (array.length === ItemsPerPage) { dispatch(lastPageFalse()) };
          if (array.length) {
            dispatch(getPicture(array));
          }
          else {
            Notiflix.Notify.failure('Please enter valid search querry');
            dispatch(clearPictures())
          } dispatch(loadingFalse())
        });
    };
  }, [dispatch, searchQuerry]);
  
 
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px'
      }}
    >
      <SearchBar />
      {pictures.length > 0 && <ImageGallery />}
      {loading && <Loader />}
      {!loading && pictures.length > 0 && !lastPage && <Button />}
      {showModal && <Modal />}
    </div>
  );
  };



