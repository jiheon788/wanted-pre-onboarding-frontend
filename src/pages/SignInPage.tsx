import { useState, useEffect } from 'react';
import useInputs from '@/lib/hooks/useInputs';
import { postSignIn } from '@/repositories/auth/authRepository';
import { useNavigate } from 'react-router-dom';
import token from '@/lib/token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';

const SignInpage = () => {
  const navigate = useNavigate();
  const [signInData, onChangeSignInData] = useInputs({
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
    if (!signInData.email.includes('@')) {
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

    if (signInData.password.length < 8) {
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
  }, [signInData]);

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignIn(signInData)
      .then((res) => {
        alert(res.statusText);
        token.setToken(ACCESS_TOKEN_KEY, res.data.access_token);
        navigate('/todo');
      })
      .catch((err) => {
        alert(err.response.data.message || err.message);
      });
  };

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY)) navigate('/todo');
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-5 fw-bold">SignIn</h1>
      <form onSubmit={onSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signInData.email}
          onChange={onChangeSignInData}
          data-testid="email-input"
        />
        {emailError && <div className="text-muted">{emailError.message}</div>}

        <input
          type="password"
          className="form-control"
          placeholder="패스워드를 입력해주세요"
          name="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          data-testid="password-input"
        />
        {passwordError && <div className="text-muted">{passwordError.message}</div>}

        <button
          type="submit"
          className="btn btn-dark"
          data-testid="signin-button"
          disabled={emailError.isError || passwordError.isError}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignInpage;
