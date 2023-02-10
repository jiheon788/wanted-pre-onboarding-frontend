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
    <nav>
      <ul className="nav-menus">
        {Object.keys(routerMeta).map((componentKey: string, index: number) => {
          const menu: IRouterMeta = routerMeta[componentKey];

          if (menu.isShow)
            return (
              <li className="nav-item" key={menu.path}>
                <NavLink to={menu.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {menu.name}
                </NavLink>
              </li>
            );
        })}
        {token.getToken(ACCESS_TOKEN_KEY) ? (
          <li>
            <button type="button" onClick={onLogout}>
              로그아웃
            </button>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
