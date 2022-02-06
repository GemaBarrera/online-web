import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const windowSize = window.innerWidth;
  const initialSize = windowSize < 800 ? 'little' : 'big';

  const [deviceSize, setDeviceSize] = useState(initialSize);
  const [isMenuSelected, setIsMenuSelected] = useState(false);

  const getWindowWith = () => {
    const { innerWidth: width } = window;
    return width;
  }

  useEffect(() => {
    const handleResize = () => getWindowWith() < 800 ? setDeviceSize('little') : setDeviceSize('big');
    window.addEventListener('resize', handleResize);
  }, [windowSize]);

  return (
    <div className="header-wrapper">
      <Link to="/" className="nav-menu-item">
        <div className="titles-wrapper">
          <div className="header-title">
            Web Kids ;)
          </div>
          <div className="header-sub-title">
            Actividad extraescolar online.
          </div>
        </div>
      </Link>
      {deviceSize === 'big'
        ? (
          <div className="nav-menu-wrapper">
            <Link to="/cursos" className="nav-menu-item">Info Cursos</Link>
            <Link to="/tutora" className="nav-menu-item">Sobre la tutora</Link>
            <Link to="/contacto" className="nav-menu-item">Contacto</Link>
          </div>
        )
        : <HamburgerMenu isSelected={isMenuSelected} setSelected={setIsMenuSelected} />
      }
      <DropdownMenu isSelected={isMenuSelected} setSelected={setIsMenuSelected} />
    </div>
  )
};

export default Header;