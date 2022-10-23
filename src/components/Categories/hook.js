import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import CategoriesActions from 'store/categories/action';
import {useSelector} from 'react-redux';
import get from 'lodash/get';

const useCategories = () => {
  const categories = useSelector(state =>
    get(state, 'categories.listCategories'),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoriesActions.getCategories());
  }, [dispatch]);

  return {
    categories,
  };
};

export default useCategories;
