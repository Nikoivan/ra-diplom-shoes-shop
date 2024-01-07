import { NavLink } from 'react-router-dom';

export type MenuItemProps = {
  title: string;
  path: string;
};

export default function MenuItem({ title, path }: MenuItemProps) {
  return (
    <li className='nav-item'>
      <NavLink className='nav-link' to={path}>
        {title}
      </NavLink>
    </li>
  );
}
