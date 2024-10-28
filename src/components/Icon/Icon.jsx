import PropTypes from "prop-types";
import clsx from "clsx";

import sprite from "@/assets/icons/sprite.svg";
import css from "./Icon.module.css";

const Icon = ({
  iconName = "icon-default",
  className,
  ariaLabel,
}) => {
  return (
    <svg
      className={clsx(css.icon, className)}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? "false" : "true"}
    >
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string
}

export default Icon;
