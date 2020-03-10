import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubit = data => {
    action(data);
    push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input
          name="firstName"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step1;
