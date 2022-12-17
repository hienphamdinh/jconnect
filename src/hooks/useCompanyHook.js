import get from 'lodash/get';
import {useSelector} from 'react-redux';

const useCompanyHooks = () => {
  const typeUser = useSelector(state => get(state, 'user.info.account.type'));

  return {
    isCompany: typeUser === 'company',
  };
};

export default useCompanyHooks;
