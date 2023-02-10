import { useState, useEffect } from 'react';
import useInputs from '@/lib/hooks/useInputs';

const SignUpPage = () => {
  const [signUpdata, onChangeSignUpData] = useInputs({
    email: '',
    password: '',
    confirmationPassword: '',
  });

  const [emailError, setEmailError] = useState({
    message: '',
    isError: true,
  });
  const [passwordError, setPasswordError] = useState({
    message: '',
    isError: true,
  });

  useEffect(() => {
    if (!signUpdata.email.includes('@')) {
      setEmailError({
        message: '이메일에는 @가 포함되어야 합니다.',
        isError: true,
      });
    } else {
      setEmailError({
        message: '유효한 이메일 입니다 :)',
        isError: false,
      });
    }

    if (signUpdata.password.length < 8) {
      setPasswordError({
        message: '패스워드는 8자 이상이어야 합니다.',
        isError: true,
      });
    } else {
      setPasswordError({
        message: '유효한 패스워드 입니다 :)',
        isError: false,
      });
    }
  }, [signUpdata]);

  return (
    <>
      <h1>SignUp</h1>
      <form>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signUpdata.email}
          onChange={onChangeSignUpData}
          data-testid="email-input"
        />
        {emailError && <div>{emailError.message}</div>}

        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          name="password"
          value={signUpdata.password}
          onChange={onChangeSignUpData}
          data-testid="password-input"
        />
        {passwordError && <div>{passwordError.message}</div>}

        <button type="submit" data-testid="signup-button" disabled={emailError.isError || passwordError.isError}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
