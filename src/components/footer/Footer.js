import LinkedinIcon from '@material-ui/icons/LinkedIn';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Actividad Dirigida por:</h2>
          <p className="name">Gemma Barrera Andrades</p>
          <p>Web Developer</p>
          <p>Coordinadora de Actividades de Ocio y Tiempo Libre</p>
        </div>
        <div className="footer-contact">
          <div className="footer-item">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/gemabarrera/"
            >
              <LinkedinIcon />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/gemabarrera/"
            >
              in/gemabarrera/
            </a>
          </div>
          <div className="footer-item">
            <a href="mailto:gbarrerafront@correo.com">
              <EmailOutlinedIcon />
            </a>
            <a href="mailto:gbarrerafront@correo.com">gbarrerafront@gmail.com</a>
          </div>
          <div className="footer-item">
            <WhatsAppIcon />
            <p>640 076 827</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;