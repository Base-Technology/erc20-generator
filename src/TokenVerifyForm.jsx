import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Web3 from "web3";
import { useToggle } from "./hooks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

library.add(faWindowClose);

const StyledDiv = styled.div`
  border: 3px solid #ececec;
  border-radius: 8px;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
`;

const CreateTokenButton = styled.button`
  font-family: "Lucida Console", Monaco, monospace;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  float: right; /* added */
`;

const networkOptions = [
  { value: "bscTestnet", label: "BSC Testnet" },
];

const TokenField = ({
  values,
  errors,
  touched,
  fieldName,
  label,
  placeholder,
  helpText,
  maxLength,
  disabled,
  optionalButton,
  optionalExtraControl,
  setFieldValue
}) => (
  <div
    className={`form-group ${errors[fieldName] && touched[fieldName] ? "text-danger" : null
      }`}
  >
    <label htmlFor={fieldName}>{label}</label>
    <div className="input-group">
      {fieldName === "network" ? (
        <Field
          className={`form-control ${errors[fieldName] && touched[fieldName] ? "is-invalid" : null}`}
          component="select"
          name={fieldName}
          id={fieldName}
          disabled={disabled}
          required
          onChange={(e) => setFieldValue(fieldName, e.target.value)}
          value={values[fieldName]}
        >
          <option value="" disabled>Select network</option>
          {networkOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>


      ) : (
        <Field
          className={`form-control ${errors[fieldName] && touched[fieldName] ? "is-invalid" : null
            }`}
          type="text"
          name={fieldName}
          id={fieldName}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          value={values[fieldName]}
          required
        />
      )}
      {optionalButton}
      {errors[fieldName] && touched[fieldName] && (
        <div className="invalid-feedback">{errors[fieldName]}</div>
      )}
    </div>
    {optionalExtraControl}
    <small className="form-text text-muted">{helpText}</small>
  </div>
);

const TokenVerifyForm = ({ onSubmit, disabled }) => {
  const [isScanning, toggleScanning, setScanning] = useToggle(false);
  const onError = err => {
    console.log("Error while scanning address: " + err);
    setScanning(false);
  };

  const handleSubmitVerify = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  const handleValidationVerify = values => {
    let errors = {};

    if (!values.contractAddress) {
      errors.contractAddress = "Contract address is required";
    }
    return errors;
  };
  

  return (
    <StyledDiv>
      <div style={{ width: 500, fontSize: 20 }}>
        <Formik
        initialValues={{
          contractAddress: "",
          network: "",
        }}
          validate={handleValidationVerify}
          onSubmit={handleSubmitVerify}
          render={({ values, errors, touched, setFieldValue }) => (
            <Form className="needs-validation" noValidate>
              <TokenField
                values={values}
                errors={errors}
                touched={touched}
                fieldName="contractAddress"
                label="Contract Address"
                placeholder="Enter the contract address"
                helpText="A valid ethereum address starting with 0x..."
                disabled={disabled}
                setFieldValue={setFieldValue} // added
              />
              <TokenField
                values={values}
                errors={errors}
                touched={touched}
                fieldName="network"
                label="Network"
                placeholder="Enter the network"
                helpText="A valid network"
                disabled={disabled}
                setFieldValue={setFieldValue} // added
              />
              <Field type="hidden" name="verifyData" />
              <CreateTokenButton key="verify" type="submit" disabled={disabled}>
                Verify!
                🚀🌙
              </CreateTokenButton>
            </Form>
          )}
        />
      </div>
    </StyledDiv>
  );
};

export default TokenVerifyForm;



