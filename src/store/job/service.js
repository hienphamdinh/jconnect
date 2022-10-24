import {GET, POST} from 'store/api';

export const getHotJob = () => {
  const path = 'job/outstanding';
  return GET(path, {});
};
