import React from "react";
import { Icon } from "@/components";
import css from "./Rating.module.css";

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5).keys()].map((indx) => (
        <Icon
          key={indx}
          className={css.subtitleIcon}
          iconName="icon-star"
          size="16"
          color={indx <= rating ? "#ffc531" : "#f2f4f7"}
        />
      ))}
    </div>
  );
};

export default Rating;
