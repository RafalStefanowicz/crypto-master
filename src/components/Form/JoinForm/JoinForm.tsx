import React from "react";
import { Formik, Form } from "formik";
import { FIELDS_NAME } from "../../../types/FIELDS_NAMES";

import { ValidationType } from "../../../utility/validate";
import { StyledField, StyledMessage } from "../../../styles/formStyles";
import { SubmitButton } from "../SubmitButton/SubmitButton";

interface JoinFormProps {
  fields: FieldsType;
  handleSubmit: Function;
  validate: ValidationType;
  buttonText: string;
}
type FieldsType = FieldI[];

interface FieldI {
  type: String;
  name: FIELDS_NAME;
}

export const JoinForm = ({ fields, handleSubmit, validate }: JoinFormProps) => {
  const initialValues: any = {};
  fields.forEach(field => {
    initialValues[field.name] = "";
  });

  const renderFields = () =>
    fields.map(field => (
      <div key={field.name}>
        <StyledField
          type={field.type}
          name={field.name}
          placeholder={field.name}
        />
        <StyledMessage name={field.name} component="div" />
      </div>
    ));

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validate={validate}
      onSubmit={async (values, { setSubmitting }) => {
        const message = await handleSubmit(values);
        await setSubmitting(false);

        message &&
          setTimeout(() => {
            alert(message);
          }, 0);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          {renderFields()}
          <SubmitButton
            disabled={!isValid || isSubmitting}
            submitting={isSubmitting}
            text="Submit"
          />
        </Form>
      )}
    </Formik>
  );
};
