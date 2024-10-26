import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";

import { selectIsFavorite } from "@/store/favorites/selectors";

import { Icon } from "@/components";

import css from "./FavoriteButton.module.css";

const FavoriteButton = ({ id, onToggleFavorite }) => {
  const isFavorite = useSelector((state) => selectIsFavorite(state, id));

  const handleToggleFavorite = () => onToggleFavorite(id);

  return (
    <button
      type="button"
      className={css["favorite-btn"]}
      onClick={handleToggleFavorite}
      aria-pressed={isFavorite}
    >
      <Icon
        className={clsx(isFavorite && css.active, css["favorite-icon"])}
        iconName="icon-heart"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      />
    </button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onToggleFavorite: PropTypes.func.isRequired
}

export default React.memo(FavoriteButton);