import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import token from '@/lib/token';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    navigate('/signin');
  };

  return (
    <nav className="py-2 border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          {Object.keys(routerMeta).map((componentKey: string, index: number) => {
            const menu: IRouterMeta = routerMeta[componentKey];

            if (menu.isShow)
              return (
                <li className="nav-item" key={menu.path}>
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) => `nav-link link-dark px-2 ${isActive ? 'active' : ''}`}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              );
          })}
        </ul>
        {token.getToken(ACCESS_TOKEN_KEY) ? (
          <button type="button" onClick={onLogout} className="btn btn-outline-dark me-2">
            로그아웃
          </button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
