import {useRef} from 'react';

const useApplyHook = () => {
  const formRef = useRef();
  const onResumeChange = cv => {
    formRef.current.setFieldValue('cv', cv);
  };

  return {
    formRef,
    onResumeChange,
  };
};

export default useApplyHook;
