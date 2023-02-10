import { useState, useEffect } from 'react';
import useInputs from '@/lib/hooks/useInputs';

const SignUpPage = () => {
  const [signUpdata, onChangeSignUpData] = useInputs({
    email: '',
    password: '',
    confirmationPassword: '',
  });

  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (!signUpdata.email.includes('@')) {
      setEmailError('이메일에는 @가 포함되어야 합니다.');
    } else {
      setEmailError('유효한 이메일 입니다 :)');
    }
  }, [signUpdata]);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signUpdata.email}
          onChange={onChangeSignUpData}
          data-testid="email-input"
        />
        {emailError && <div>{emailError}</div>}

        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          name="password"
          value={signUpdata.password}
          onChange={onChangeSignUpData}
          data-testid="password-input"
        />

        <button type="submit" data-testid="signup-button">
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
