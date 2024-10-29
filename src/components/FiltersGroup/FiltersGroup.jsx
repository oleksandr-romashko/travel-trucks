import PropTypes from "prop-types";
import { FilterItem, Separator } from "@/components";
import css from "./FiltersGroup.module.css";

const FiltersGroup = ({ title = "", items }) => {
  return (
    <div className={css["filter-group-wrapper"]}>
      {title.length > 0 && <p className={css.title}>{title}</p>}
      <Separator />
      <ul className={css["items-list"]}>
        {items.map((item) => {
          return (
            <li key={item.id} className={css["item"]}>
              <FilterItem {...item} />
            </li>
          )
        }
      )}
      </ul>
    </div>
  );
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FiltersGroup;
