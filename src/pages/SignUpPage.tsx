import { useEffect } from 'react';
import useInputs from '@/lib/hooks/useInputs';
import { postSignUp } from '@/repositories/auth/authRepository';
import { useNavigate } from 'react-router-dom';
import token from '@/lib/token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useValidation from '@/lib/hooks/useValidation';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpdata, onChangeSignUpData] = useInputs({
    email: '',
    password: '',
  });

  const [emailStatus, passwordStatus] = useValidation(signUpdata);

  const onSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignUp(signUpdata)
      .then((res) => {
        alert(res.statusText);
        navigate('/signin');
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
      <h1 className="display-5 fw-bold">SignUp</h1>
      <form onSubmit={onSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signUpdata.email}
          onChange={onChangeSignUpData}
          data-testid="email-input"
        />
        {emailStatus && <div className="text-muted">{emailStatus.log}</div>}

        <input
          type="password"
          className="form-control"
          placeholder="패스워드를 입력해주세요"
          name="password"
          value={signUpdata.password}
          onChange={onChangeSignUpData}
          data-testid="password-input"
        />
        {passwordStatus && <div className="text-muted">{passwordStatus.log}</div>}

        <button
          type="submit"
          className="btn btn-dark"
          data-testid="signup-button"
          disabled={emailStatus.isError || passwordStatus.isError}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
