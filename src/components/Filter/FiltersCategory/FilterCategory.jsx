import PropTypes from "prop-types";

import { Separator } from "@/components";
import FilterItem from "../FilterItem/FilterItem"

import css from "./FilterCategory.module.css";

const FiltersGroup = ({ title = "", items }) => {
  return (
    <div className={css["filter-group-wrapper"]}>
      {title.length > 0 && <p className={css.title}>{title}</p>}
      <Separator />
      <ul className={css["items-list"]}>
        {items.map((item) => (
          <li key={item.id} className={css["item"]}>
            <FilterItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FiltersGroup;
