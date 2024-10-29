import { useMemo } from "react";
import { Field, useField, useFormikContext } from "formik";
import clsx from "clsx";

import { Icon } from "@/components";

import css from "./FilterItem.module.css";

  // id: "transmission",
  // value: {
  //   id: "automatic",
  //   value: {
  //     filterValue: "automatic",
  //     label: "Automatic",
  //     iconName: "icon-diagram",
  //   },
  // },
// const FilterItem = ({ id, label, name, value, icon, single = false }) => {
const FilterItem = (
  { id,
    value: { group, label, queryName, iconName },
    single = false,
    value = false
  }
) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(id);

  const isChecked = useMemo(
    () => (single ? field.value === value : !!field.value),
    [field.value, single, value]
  );

  const handleClick = () => {
    setFieldValue(inputProps.id, single ? id : !isChecked);
  };

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault(); // Prevent default space scroll
      handleClick();
    }
  };

  const handleChange = (e) => {
  };

  const inputProps = {
    id,
    name: group || id,
    value: id,
    "data-query": queryName,
    type: single ? "radio" : "checkbox",
  };

  return (
    <div
      className={clsx(css.wrapper, "prevent-select")}
      tabIndex={0}
      role={single ? "radio" : "checkbox"}
      aria-checked={isChecked}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    >
      {single ? (
        // radio button
        <Field
          {...inputProps}
          aria-labelledby={`${inputProps.id}-label`}
          role="radio"
          className={css.field}
        />
      ) : (
        // checkbox
          <Field
            {...inputProps}
            aria-labelledby={`${inputProps.id}-label`}
            role="checkbox"
            className={css.field}
          />
      )}
      <label
        id={`${inputProps.id}-label`}
        htmlFor={inputProps.id}
        className={clsx(
          css.card,
          single ? css["card-radio-btn"] : css["card-checkbox"],
          isChecked && css["is-checked"]
        )}
      >
        <Icon iconName={iconName} className={css.icon} />
        <span className={css.label}>{label}</span>
      </label>
    </div>
  );
};

export default FilterItem;
