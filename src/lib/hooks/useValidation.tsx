import { useState, useEffect } from 'react';

interface ISignForm {
  email: string;
  password: string;
}

const useValidation = (target: ISignForm) => {
  const [emailStatus, setEmailStatus] = useState({
    log: '',
    isError: true,
  });

  const [passwordStatus, setPasswordStatus] = useState({
    log: '',
    isError: true,
  });

  useEffect(() => {
    if (!target.email.includes('@')) {
      setEmailStatus({
        log: '이메일에는 @가 포함되어야 합니다.',
        isError: true,
      });
    } else {
      setEmailStatus({
        log: '유효한 이메일 입니다 :)',
        isError: false,
      });
    }

    if (target.password.length < 8) {
      setPasswordStatus({
        log: '패스워드는 8자 이상이어야 합니다.',
        isError: true,
      });
    } else {
      setPasswordStatus({
        log: '유효한 패스워드 입니다 :)',
        isError: false,
      });
    }
  }, [target]);

  return [emailStatus, passwordStatus];
};

export default useValidation;
