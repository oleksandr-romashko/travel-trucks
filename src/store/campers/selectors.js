import { createSelector } from "@reduxjs/toolkit";

export const selectPossibleVehicleEquipmentList = [
  {
    id: "transmission",
    value: [
      {
        id: "automatic",
        value: {
          filterValue: "automatic",
          label: "Automatic",
          iconName: "icon-diagram",
        },
      },
      {
        id: "manual",
        value: {
          filterValue: "manual",
          label: "Manual",
          iconName: "icon-diagram",
        },
      },
    ],
  },
  {
    id: "engine",
    value: [
      {
        id: "diesel",
        value: {
          filterValue: "diesel",
          label: "Diesel",
          iconName: "icon-fuel-pump",
        },
      },
      {
        id: "petrol",
        value: {
          filterValue: "petrol",
          label: "Petrol",
          iconName: "icon-fuel-pump",
        },
      },
      {
        id: "hybrid",
        value: {
          filterValue: "hybrid",
          label: "Hybrid",
          iconName: "icon-fuel-pump",
        },
      },
    ],
  },
  {
    id: "AC",
    value: {
      filterValue: "ac",
      label: "AC",
      iconName: "icon-wind",
    },
  },
  {
    id: "bathroom",
    value: {
      filterValue: "bathroom",
      label: "Bathroom",
      iconName: "icon-shower",
    },
  },
  {
    id: "kitchen",
    value: {
      filterValue: "kitchen",
      label: "Kitchen",
      iconName: "icon-cup-hot",
    },
  },
  {
    id: "TV",
    value: {
      filterValue: "tv",
      label: "TV",
      iconName: "icon-tv",
    },
  },
  {
    id: "radio",
    value: {
      filterValue: "radio",
      label: "Radio",
      iconName: "icon-radio",
    },
  },
  {
    id: "refrigerator",
    value: {
      filterValue: "fridge",
      label: "Refrigerator",
      iconName: "icon-fridge",
    },
  },
  {
    id: "microwave",
    value: {
      filterValue: "microwave",
      label: "Microwave",
      iconName: "icon-microwave",
    },
  },
  {
    id: "gas",
    value: {
      filterValue: "gas",
      label: "Gas",
      iconName: "icon-gas-stove",
    },
  },
  {
    id: "water",
    value: {
      label: "Water",
      iconName: "icon-water-drop",
      filterValue: "water",
    },
  },
];

export const selectVehicleFormsList = [
  {
    form: [
      {
        panelTruck: {
          filterValue: "van",
          label: "Van",
          iconName: "icon-grid-1x2",
        },
      },
      {
        fullyIntegrated: {
          filterValue: "integrated",
          label: "Fully Integrated",
          iconName: "icon-grid-2x2",
        },
      },
      {
        alcove: {
          filterValue: "alcove",
          label: "Alcove",
          iconName: "icon-grid-3x3",
        },
      },
    ],
  },
];

export const selectVehicleSpecsList = [
  {
    length: {
      filterValue: "length",
      label: "Length",
    },
  },
  {
    width: {
      filterValue: "width",
      label: "Width",
    },
  },
  {
    height: {
      filterValue: "height",
      label: "Height",
    },
  },
  {
    tank: {
      filterValue: "tank",
      label: "Tank",
    },
  },
  {
    consumption: {
      filterValue: "consumption",
      label: "Consumption",
    },
  },
];

// export const selectVehicleEquipList = [
//   {
//     id: "input-transmission",
//     name: "transmission",
//     value: "automatic",
//     label: "Automatic",
//     iconName: "icon-diagram",
//   },
//   {
//     id: "input-engine",
//     name: "engine",
//     value: "petrol",
//     label: "Petrol",
//     iconName: "icon-fuel-pump",
//   },
//   {
//     id: "input-ac",
//     name: "AC",
//     value: false,
//     label: "AC",
//     iconName: "icon-wind",
//   },
//   {
//     id: "input-bathroom",
//     name: "bathroom",
//     value: false,
//     label: "Bathroom",
//     iconName: "icon-shower",
//   },
//   {
//     id: "input-kitchen",
//     name: "kitchen",
//     value: false,
//     label: "Kitchen",
//     iconName: "icon-cup-hot",
//   },
//   {
//     id: "input-tv",
//     name: "TV",
//     value: false,
//     label: "TV",
//     iconName: "icon-tv",
//   },
//   {
//     id: "input-radio",
//     name: "radio",
//     value: false,
//     label: "Radio",
//     iconName: "icon-radio",
//   },
//   {
//     id: "input-refrigerator",
//     name: "refrigerator",
//     value: false,
//     label: "Refrigerator",
//     iconName: "icon-fridge",
//   },
//   {
//     id: "input-microwave",
//     name: "microwave",
//     value: false,
//     label: "Microwave",
//     iconName: "icon-microwave",
//   },
//   {
//     id: "input-gas",
//     name: "gas",
//     value: false,
//     label: "Gas",
//     iconName: "icon-gas-stove",
//   },
//   {
//     id: "input-water",
//     name: "water",
//     value: false,
//     label: "Water",
//     iconName: "icon-water-drop",
//   },
// ];

export const selectVehicleFormsListOld = [
  {
    id: "input-van",
    name: "form",
    value: "panelTruck",
    label: "Van",
    iconName: "icon-grid-1x2",
  },
  {
    id: "input-fully_integrated",
    name: "form",
    value: "fullyIntegrated",
    label: "Fully Integrated",
    iconName: "icon-grid-2x2",
  },
  {
    id: "input-alcove",
    name: "form",
    value: "alcove",
    label: "Alcove",
    iconName: "icon-grid-3x3",
  },
];

export const selectLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectCampersObj = state => state.campers.items ?? {};
export const selectCampers = createSelector([selectCampersObj], campersObj =>
  Object.values(campersObj)
);
export const selectCamperById = (state, id) => state.campers.items?.[id];
