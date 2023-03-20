import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, } from 'react-redux';
import { getSearchquerry } from 'redux/searchquerry/slice';
import { pageTo1 } from 'redux/page/slice';
import { clearPictures } from 'redux/pictures/slice';
import { Header, Form, Button, ButtonLabel, Field } from './Searchbar.styled';
import Notiflix from 'notiflix';
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export function SearchBar() {
    const dispatch = useDispatch();

    const getValue = (initialValues) => {
        const search = initialValues.searchQuerry.trim();
        if (search === '') {
            dispatch(clearPictures());
            Notiflix.Notify.warning('Please enter the search querry');
            return;
        };
        dispatch(getSearchquerry(search));
        dispatch(pageTo1());
    };

const validationSchema = Yup.object({
            searchQuerry: Yup.string(),
});
      return (
          <Header>
              <Formik
                  initialValues={{ searchQuerry: '' }}
                  onSubmit={(value) => getValue(value)}
                  validationSchema={validationSchema}
              >
                  <Form>
                      <Button type="submit">
                          <SearchIcon width={20} height={20} />
                          <ButtonLabel ></ButtonLabel>
                      </Button>
                      <Field
                          name="searchQuerry"
                          type="text"
                          autoComplete="off"
                          autoFocus
                          placeholder="Search images and photos" />
                  </Form>
              </Formik>
          </Header>
      );
    };
