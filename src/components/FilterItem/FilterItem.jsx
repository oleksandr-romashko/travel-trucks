import { useMemo } from "react";
import { Field, useField, useFormikContext } from "formik";
import clsx from "clsx";

import { Icon } from "@/components";

import css from "./FilterItem.module.css";

const FilterItem = ({ id, label, name, value, icon, single = false }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const isChecked = useMemo(
    () => (single ? field.value === value : !!field.value),
    [field.value]
  );

  const handleClick = () => {
    const { value: currValue } = field;
    if (single && currValue === value) {
      return setFieldValue(name, false);
    }
  };

  const handleChange = (e) => {
    const { checked } = e.target;
    if (typeof value === "string" && checked) {
      return setFieldValue(name, value);
    }
    return setFieldValue(name, checked);
  };

  const inputProps = {
    id,
    name,
    className: css.htmlInput,
    type: single ? "radio" : "checkbox",
    onClick: handleClick,
    onChange: handleChange,
  };

  return (
    <div className={css.wrapper}>
      {single ? (
        <Field {...inputProps} value={value} />
      ) : (
        <Field {...inputProps} />
      )}
      <div className={clsx(css.card, isChecked && css.isChecked)}>
        <Icon iconName={icon} className={css.icon} />
        <div className={css.label}>{label}</div>
      </div>
    </div>
  );
};

export default FilterItem;
