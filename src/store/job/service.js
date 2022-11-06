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

export const myApplyJob = (userId, skip = 0) => {
  const path = `job/${userId}/my-applied`;
  return GET(path, {
    skip,
  });
};

export const myPostedJob = userId => {
  const path = `job/${userId}/my-posted`;
  return GET(path, {
    userId,
  });
};

export const mySavedJob = userId => {
  const path = `job/${userId}/my-saved`;
  return GET(path, {
    userId,
  });
};

export const removeApply = (applicantId, jobId) => {
  const path = 'job/remove-apply';
  return POST(path, {
    applicantId,
    jobId,
  });
};
