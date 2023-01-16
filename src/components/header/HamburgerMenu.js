import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

const HamburgerMenu = ({ isSelected = false, setSelected }) => {
  return (
    <>
      {
        isSelected
          ? <div className="burger-div" onClick={() => setSelected(false)}><CloseIcon /></div>
          : <div className="burger-div" onClick={() => setSelected(true)}><MenuIcon /></div>
      }
    </>
  )
};
export default HamburgerMenu;