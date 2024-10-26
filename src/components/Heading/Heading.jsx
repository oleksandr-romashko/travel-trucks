import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Icon } from "@/components";

import { formatPrice } from "@/helpers";

import css from "./Heading.module.css";

const Heading = ({
  id,
  title,
  price,
  rating,
  reviewsNumber,
  location,
  className,
}) => {
  return (
    <div className={clsx(css["heading-wrapper"], className)}>
      <div className={css["title-wrapper"]}>
        <h2 className={clsx(css.title, "truncate-text")}>{title}</h2>
        <ul className={css["details-list"]}>
          <li className={css["details-item"]}>
            <Icon
              iconName="icon-star"
              className={clsx(css["rating-icon"], css["details-icon"])}
            />
            <Link
              to={`/catalog/${id}/reviews`}
              replace
              className={css["rating-link"]}
            >
              <span>{`${rating}(${reviewsNumber} reviews)`}</span>
            </Link>
          </li>
          <li className={css["details-item"]}>
            <Icon
              iconName="icon-paper-map"
              className={css["details-icon"]}
            />
            {location}
          </li>
        </ul>
      </div>
      <div className={css.price}>{formatPrice(price)}</div>
    </div>
  );
};

Heading.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsNumber: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Heading;
