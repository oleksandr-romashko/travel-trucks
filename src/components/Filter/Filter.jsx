import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";

import { selectFilters } from "@/store/filter/selectors";
import {
  selectPossibleVehicleEquipmentList,
  selectVehicleFormsList,
} from "@/store/campers/selectors";
import { selectLoading } from "@/store/campers/selectors";

import { TextField, Button } from "@/components";
import FilterCategory from "./FiltersCategory/FilterCategory"

import css from "./Filter.module.css";

const Filter = ({ onSubmit }) => {
  const isLoading = useSelector(selectLoading);

  const filters = useSelector(selectFilters);
  const equipmentFiltersArr = selectPossibleVehicleEquipmentList;
  const formFiltersArr = selectVehicleFormsList;

  const handleSubmit = (values) => {
    const filteredValues = {};
    for (const key in values) {
      if (values[key]) {
        filteredValues[key] = values[key];
      }
    }
    onSubmit(filteredValues);
  };

  const filterOptionsArr = useMemo(
    () => equipmentFiltersArr?.reduce((acc, item) => {
      if (Array.isArray(item.value)) {
        return acc.concat(
          item.value.map(el => {
            el.value.group = item.id;
            return el;
          })
        );
        } else {
          acc.push(item);
          return acc;
        }
      }, []),
    [equipmentFiltersArr]
  );

  const formOptionsArr = useMemo(
    () => formFiltersArr?.map((item) => {
      item.value.group = "form";
      return { ...item, single: true };
    }),
    [formFiltersArr]
  );

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{ location: "", ...filters }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <TextField
            id={"location"}
            name={"location"}
            type={"text"}
            label={"Location"}
            clearable={true}
            placeholder={"City"}
            appendIcon={"icon-paper-map"}
          />
          <div className={css.filtersSet}>
            <p className={css.title}>Filters</p>
            <FilterCategory
              type="multiple"
              title={"Vehicle equipment"}
              items={filterOptionsArr}
            />
            <FilterCategory
              type="single"
              title={"Vehicle type"}
              items={formOptionsArr}
            />
          </div>
          <Button type="submit" isLoading={isLoading}>Search</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
