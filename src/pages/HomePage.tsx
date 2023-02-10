import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Todos</h1>

      <p className="lead mb-4">
        2023 원티드 프리온보딩
        <br />
        프론트엔드 인턴쉽 선발과제
      </p>
      <button type="button" className="btn btn-dark" onClick={() => navigate('/todo')}>
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
