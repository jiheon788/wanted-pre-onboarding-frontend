import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.getToken(ACCESS_TOKEN_KEY)) navigate('/signin');
  }, []);

  return <>TodoPage</>;
};

export default TodoPage;
