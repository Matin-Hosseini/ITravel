import { Link } from "react-router-dom";
import "./index.css";

type SectionHeaderProps = {
  title: string;
  caption ?: string;
  link?: { to: string; title: string };
};

const SectionHeader = ({ title, caption, link }: SectionHeaderProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex flex-column">
        <span className="title">{title}</span>
        <span className="courses-header__text">{caption}</span>
      </div>
      {link && (
        <div>
          <Link to={link.to} className="section-header__link">
            {link.title}
            <i className="fas fa-arrow-left section-header__icon"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
