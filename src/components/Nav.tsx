import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import { NavLink } from 'react-router-dom';

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
