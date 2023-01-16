import GoBack from "../components/goback/GoBack";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <GoBack />
      <h1>Contáctame</h1>
      <div className="contact-media-wrapper">
        <div className="contact-card">
          <h2>Por teléfono</h2>
          <p>Llámame de 18h a 22h o envíame un WhatsApp</p>
          <p className="contact-data">640 076 827</p>
        </div>
        <div className="contact-card">
          <h2>Por email</h2>
          <p>Envíame un correo con tu consulta</p>
          <p className="contact-data">gbarrerafront@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
