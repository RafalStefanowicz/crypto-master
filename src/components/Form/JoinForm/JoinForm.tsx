import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FIELDS_NAME } from "../../../types/FIELDS_NAMES";

import { ValidationType } from "../../../utility/validate";

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
        <Field type={field.type} name={field.name} />
        <ErrorMessage name={field.name} component="div" />
      </div>
    ));

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validate={validate}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {renderFields()}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
