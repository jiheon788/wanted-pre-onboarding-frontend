import { useState, useEffect } from 'react';
import { isValidEmail, isValidPassword } from '../utils/validation';

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
    if (isValidEmail(target.email)) {
      setEmailStatus({
        log: '유효한 이메일 입니다 :)',
        isError: false,
      });
    } else {
      setEmailStatus({
        log: '이메일에는 @가 포함되어야 합니다.',
        isError: true,
      });
    }

    if (isValidPassword(target.password)) {
      setPasswordStatus({
        log: '유효한 패스워드 입니다 :)',
        isError: false,
      });
    } else {
      setPasswordStatus({
        log: '패스워드는 8자 이상이어야 합니다.',
        isError: true,
      });
    }
  }, [target]);

  return [emailStatus, passwordStatus];
};

export default useValidation;
