import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { Icon, FavoriteButton } from "@/components";

import { formatPrice } from "@/helpers";

import css from "./Heading.module.css";

const Heading = ({
  id,
  title,
  price,
  rating,
  reviewsNumber,
  location,
  onToggleFavorite,
  className,
}) => {
  const { pathname } = useLocation();
  const isCatalog = pathname === "/catalog";
  return (
    <div 
      className={
        clsx(isCatalog && css["card"], css["heading-wrapper"], className)
      }
    >
      <div className={css["title-wrapper"]}>
        <h2 className={clsx(css.title, "truncate-text")}>{title}</h2>
        {pathname === "/catalog" && (
          <PriceFavorite
            id={id}
            price={price}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </div>
      <div className={css["details-wrapper"]}>
        <DetailsList
          id={id}
          rating={rating}
          reviewsNumber={reviewsNumber}
          location={location}
        />
        {pathname !== "/catalog" && (
          <PriceFavorite
            id={id}
            price={price}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </div>
    </div>
  );
};

const DetailsList = ({id, rating, reviewsNumber, location}) => {
  return (
    <ul className={css["details-list"]}>
      <li className={css["details-item"]}>
        <Icon
          iconName="icon-star"
          className={clsx(css["rating-icon"], css["details-icon"])}
        />
        <Link
          to={`/catalog/${id}/reviews`}
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
  );
};

const PriceFavorite = ({ id, price, onToggleFavorite }) => {
  const { pathname } = useLocation();

  return (
    <div className={css["price-wrapper"]}>
      <span className={css.price}>{formatPrice(price)}</span>
      {pathname === "/catalog" && (
        <FavoriteButton
          className={css["add-to-favorites-btn"]}
          id={id}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </div>
  );
};

Heading.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsNumber: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  onToggleFavorite: PropTypes.func,
  className: PropTypes.string,
}

DetailsList.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number.isRequired,
  reviewsNumber: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
}

PriceFavorite.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.number.isRequired,
  onToggleFavorite: PropTypes.func,
};

export default Heading;
