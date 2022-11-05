import {GET, POST} from 'store/api';

export const getHotJob = () => {
  const path = 'job/outstanding';
  return GET(path, {});
};

export const getJobDetail = id => {
  const path = `job/${id}`;
  return GET(path, {});
};

export const checkApply = (applicantId, jobId) => {
  const path = 'job/check-apply';
  return POST(path, {
    applicantId,
    jobId,
  });
};
export const applyJob = (applicantId, jobId) => {
  const path = 'job/apply';
  return POST(path, {
    applicantId,
    jobId,
  });
};
