
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { modalHide } from 'redux/showModal/slice';

const ModalRoot = document.querySelector('#modal-root');

export function Modal() {
    const LargeImage = useSelector(state => state.largeImage)
    const dispatch = useDispatch();
   
   const modalEventLisetener = (e) => {
        if (e.target.id === 'overlay') { return dispatch(modalHide()) };
    };

    return createPortal(
        <Overlay onClick={modalEventLisetener} id='overlay'>
            <ModalContainer>
                <img src={LargeImage} alt="" />
            </ModalContainer>
        </Overlay>,
            ModalRoot
        );
    };








