import { useId, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, TextField } from "@/components";
import { DatePickerField } from "@/components/UI";
import css from "./BookingForm.module.css";
import clsx from "clsx";

const formFields = [
  {
    name: "name",
    field: "text",
    placeholder: "Name*",
    required: true,
    hideErrors: false,
    rules: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters.")
      .max(50, "Name can't exceed 50 characters.")
      .required("Please enter your name to continue."),
    style: { 
      boxSizing: "border-box",
      height: "24px",
      padding: "8px",
      borderRadius: "4px",
    },
  },
  {
    name: "email",
    field: "text",
    placeholder: "Email*",
    hideErrors: false,
    rules: Yup.string()
    .trim()
    .email("Please enter a valid email address.")
      .required("Your email is required to proceed."),
    style: { 
      boxSizing: "border-box",
      height: "24px",
      padding: "8px",
      borderRadius: "4px",
    },
  },
  {
    name: "date",
    field: "date",
    placeholder: "Booking date*",
    hideErrors: false,
    rules: Yup.date()
      .transform((value, originalValue) => originalValue ? new Date(originalValue) : null)
      .min(new Date(), "Please select a future date for booking.")
      .required("Please select a booking date to continue."),
    style: { 
      boxSizing: "border-box",
      height: "24px",
      padding: "8px",
      borderRadius: "4px",
    },
  },
  {
    name: "comment",
    field: "text",
    as: "textarea",
    hideErrors: true,
    placeholder: "Comment",
    rules: Yup.string()
      .trim()
      .max(512, "Your comment is too long. Please limit to 512 characters."),
    style: { 
      width: "100%",
      maxWidth: "527px",
      height: "118px",
      overflowY: "auto",
      resize: "none",
      padding: "8px",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
  }
];

const validationSchema = Yup.object().shape(
  formFields.reduce(
    (schema, { name, rules }) => ({ ...schema, [name]: rules }),
    {}
  )
);

const BookingForm = ({ className }) => {
  const [sucessfulSubmission, setSucessfulSubmission] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = formFields.reduce(
    (fields, field) => ({ ...fields, [field.name]: field.value || "" }),
    {}
  );

  const formSchema = formFields.map(({ value, rules, ...field }) => ({
    ...field,
    id: useId(),
  }));

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    // simulating sending booking request
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    setIsLoading(false);
    actions.resetForm();
    setSucessfulSubmission(true);
  };

  return (
    <div className={clsx(css["form-wrapper"], className)}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          className={css["booking-form"]}
          noValidate
          autoComplete="off"
        >
          {formSchema.map((field) => (
            <div key={field.id}>
              {FormInputComponent({
                ...field,
              })}
            </div>
          ))}
          <Button
            type="submit"
            className="send-booking-btn"
            isLoading={isLoading}
          >
            {sucessfulSubmission ? "✓ Sent Successfully" : "Send"}
          </Button>
            {sucessfulSubmission ? <p className={css["success-message"]}>Thank you! We’ll be in touch soon about your vehicle booking.</p> : null}
        </Form>
      </Formik>
    </div>
  );
};

const FormInputComponent = (props) => {
  switch (props.field) {
    case "text":
      return <TextField {...props} />;
    case "date":
      return <DatePickerField {...props} />;
    default:
      return null;
  }
};

BookingForm.propTypes = {
  className: PropTypes.string,
}

export default BookingForm;
