import { useMemo } from "react";
import PropTypes from "prop-types";

import { selectPossibleVehicleEquipmentList as possibleEquipmentList } from "@/store/campers/selectors";

import { ItemsList, Badge } from "@/components";
import { Separator } from "@/components/UI";

import { filterAvailableEquipment } from "@/helpers";

import css from "./VehicleFeaturesSpecs.module.css";
import clsx from "clsx";

const VehicleFeaturesSpecs = ({ vehicleData = {}, className }) => {
  const camperEquipment = useMemo(
    () => filterAvailableEquipment(possibleEquipmentList, vehicleData),
    [vehicleData]
  );

  const selectedVehicleDetails = [
    "form",
    "length",
    "width",
    "height",
    "tank",
    "consumption",
  ];

  return (
    <div className={clsx(css["features"], className)}>
      <ItemsList
        of={Badge}
        items={camperEquipment}
        className={css["badges-list"]}
      />
      <div className={css["details"]}>
        <h4 className={css["details-title"]}>Vehicle details</h4>
        <Separator />
        <ul className={css["details-list"]}>
          {selectedVehicleDetails.map((key) => (
            <li key={key} className={css["details-item"]}>
              <span>{key}</span>
              <span>{vehicleData?.[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

VehicleFeaturesSpecs.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  transmission: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  AC: PropTypes.bool.isRequired,
  bathroom: PropTypes.bool.isRequired,
  kitchen: PropTypes.bool.isRequired,
  TV: PropTypes.bool.isRequired,
  radio: PropTypes.bool.isRequired,
  refrigerator: PropTypes.bool.isRequired,
  microwave: PropTypes.bool.isRequired,
  gas: PropTypes.bool.isRequired,
  water: PropTypes.bool.isRequired,
  
  form: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  tank: PropTypes.string.isRequired,
  consumption: PropTypes.string.isRequired,
};

export default VehicleFeaturesSpecs;
