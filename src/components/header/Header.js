import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const location = useLocation();
  const windowSize = window.innerWidth;
  const initialSize = windowSize < 800 ? 'little' : 'big';

  const [deviceSize, setDeviceSize] = useState(initialSize);
  const [isMenuSelected, setIsMenuSelected] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const getWindowWith = () => {
    const { innerWidth: width } = window;
    return width;
  }

  useEffect(() => {
    const handleResize = () => getWindowWith() < 800 ? setDeviceSize('little') : setDeviceSize('big');
    window.addEventListener('resize', handleResize);
  }, [windowSize]);

  useEffect(() => {
    let path = location.pathname;
    setCurrentPath(path);
  }, [location])

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
            <Link to="/cursos" className={`nav-menu-item ${currentPath === '/cursos' && 'active'}`}>Info Cursos</Link>
            <Link to="/tutora" className={`nav-menu-item ${currentPath === '/tutora' && 'active'}`}>Sobre la tutora</Link>
            <Link to="/contacto" className={`nav-menu-item ${currentPath === '/contacto' && 'active'}`}>Contacto</Link>
          </div>
        )
        : <HamburgerMenu isSelected={isMenuSelected} setSelected={setIsMenuSelected} />
      }
      <DropdownMenu isSelected={isMenuSelected} setSelected={setIsMenuSelected} />
    </div>
  )
};

export default Header;