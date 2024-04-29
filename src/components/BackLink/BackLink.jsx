import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import style from "./BackLink.module.css";

export const BackLink = ({ to, children }) => {
  // const navigate = useNavigate();

  return (
    <Link to={to} className={style.backLink}>
      <HiArrowLeft size="16" />
      {children}
    </Link>
  );
};
