import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HeroSection({ imageSrc, title, subTitle, buttonText }) {
  return (
    <section
      className={`hero bg-[url(${imageSrc})] flex h-96 w-full items-center justify-center
      `}
    >
      <div className="hero-inner relative flex flex-col items-center justify-between gap-4 rounded-md bg-slate-300 p-8 drop-shadow-md">
        <h2 className="hero-title">{title}</h2>
        <span className="hero-sub">{subTitle}</span>
        <div className="hero btn rounded-sm bg-slate-900 p-1 text-white">
          <Link to="/shop">{buttonText}</Link>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
};

export default HeroSection;
