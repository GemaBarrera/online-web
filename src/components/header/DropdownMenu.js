import { useNavigate } from "react-router-dom";

const DropdownMenu = ({ isSelected, setSelected }) => {
  let navigate = useNavigate();

  const onClick = (route) => {
    navigate(route);
    setSelected(false);
  };

  return (
    <div className={`dropdown-menu-wrapper ${!isSelected && "closed"}`}>
      <p className="nav-menu-item" onClick={() => onClick("/cursos")}>
        Info Cursos
      </p>
      <p className="nav-menu-item" onClick={() => onClick("/tutora")}>
        Sobre la tutora
      </p>
      <p className="nav-menu-item" onClick={() => onClick("/contacto")}>
        Contacto
      </p>
    </div>
  );
};

export default DropdownMenu;
