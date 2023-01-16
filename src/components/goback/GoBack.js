import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Link to="/" className="goback">
      {" "}
      <ArrowBackIcon />
      Volver
    </Link>
  );
};

export default GoBack;
