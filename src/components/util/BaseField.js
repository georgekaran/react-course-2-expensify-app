import React from "react";
import { Field } from "formik";

const BaseField = props => (
  <label htmlFor={`input-${props.inputId}`} className='inp'>
    <Field id={`input-${props.inputId}`} title={props.inputTitle} type={props.inputType} 
            name={props.inputName} placeholder="&nbsp;" />
    <span className="label">{props.inputTitle}</span>
    <span className="border" />
  </label>
);

export default BaseField;
