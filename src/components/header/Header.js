import { Link } from 'react-router-dom';

const Header = () => {
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
      <div className="nav-menu-wrapper">
        <Link to="/cursos" className="nav-menu-item">Cursos</Link>
        <Link to="/tutora" className="nav-menu-item">Sobre la tutora</Link>
        <Link to="/contacto" className="nav-menu-item">Contacto</Link>
      </div>
    </div>
  )
};

export default Header;