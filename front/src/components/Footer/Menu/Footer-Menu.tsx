import { useContext } from 'react';
import MenuItem from '../../MenuItem/MenuItem';
import Context from '../../../context/Context';

const FooterMenu = () => {
  const { menuAdditonalItems } = useContext(Context);
  return (
    <ul className='nav flex-column'>
      {menuAdditonalItems.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </ul>
  );
};

export default FooterMenu;
