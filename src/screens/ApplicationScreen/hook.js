import {useState, useRef} from 'react';

const useApplyHook = () => {
  const formRef = useRef();
  return {
    formRef,
  };
};

export default useApplyHook;
