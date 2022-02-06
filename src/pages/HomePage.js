import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <div className="hero-home">
        <div className="text-home-wrapper">
          <h1 clasName="main-title">Iniciación a la Programación Web (Extraescolar online)</h1>
          <h2 className="sub-title">Diviértete aprendiendo desde cero todo sobre la web</h2>
          <h3>¿Qué aprenderás?</h3>
          <ul>
            <li>Qué es y cómo funciona la WEB</li>
            <li>Maquetación (HTML / CSS)</li>
            <li>Acercamiento al lenguaje de la web: JavaScript</li>
            <li>Lenguaje de Marcado Markdown</li>
            <li>Herramientas básicas para la programación</li>
            <li>Básicos de Usabilidad y Experiencia de Usuario (UX)</li>
            <li>Ética, privacidad y uso responsable</li>
          </ul>
        </div>
        <div className="image-home-wrapper">
          <div className="img-wrapper" style={{ backgroundImage: "url(/images/home-img.png)"}} />
          <div className="meeting-link">
            <p>La sesión informativa para padres será el día 18/02/2022 a las 18.30h ¡No te la pierdas!</p>
            <a
              href="https://meet.google.com/xze-hzhm-edc"
              rel="noopener noreferrer"
              target="_blank">
              Entra a la reunión
            </a>
          </div>
        </div>
      </div>
      <div className="banner">
        <AccessTimeOutlinedIcon />
        <h1 className="banner-title">La próxima actividad comienza en Marzo. ¡Apúntate ya!</h1>
      </div>
      <h3 className="sub-sub-title">Para niñas y niños de 12 a 14 años</h3>
    </div>
  )
};

export default HomePage;