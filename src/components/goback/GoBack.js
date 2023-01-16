import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const GoBack = () => {
  return <Link to="/" className="goback"> <ArrowBackIcon />Volver</Link>
};

export default GoBack;