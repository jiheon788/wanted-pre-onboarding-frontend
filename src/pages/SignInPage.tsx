import { useState, useEffect } from 'react';
import useInputs from '@/lib/hooks/useInputs';
import { postSignIn } from '@/repositories/auth/authRepository';
import { useNavigate } from 'react-router-dom';
import token from '@/lib/token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useValidation from '@/lib/hooks/useValidation';

const SignInpage = () => {
  const navigate = useNavigate();
  const [signInData, onChangeSignInData] = useInputs({
    email: '',
    password: '',
  });

  const [emailStatus, passwordStatus] = useValidation(signInData);

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignIn(signInData)
      .then((res) => {
        alert(res.statusText);
        token.setToken(ACCESS_TOKEN_KEY, res.data.access_token);
        navigate('/todo');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
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
        {emailStatus && <div className="text-muted">{emailStatus.log}</div>}

        <input
          type="password"
          className="form-control"
          placeholder="패스워드를 입력해주세요"
          name="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          data-testid="password-input"
        />
        {passwordStatus && <div className="text-muted">{passwordStatus.log}</div>}

        <button
          type="submit"
          className="btn btn-dark"
          data-testid="signin-button"
          disabled={emailStatus.isError || passwordStatus.isError}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignInpage;
