import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Web3 from "web3";
import QrReader from "react-qr-reader";
import { useToggle } from "./hooks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { parse } from "papaparse";
import CsvReader from "./CsvReader";

library.add(faQrcode);
library.add(faWindowClose);

const web3 = new Web3();

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
  optionalExtraControl
}) => (
  <div
    className={`form-group ${errors[fieldName] && touched[fieldName] ? "text-danger" : null
      }`}
  >
    <label htmlFor={fieldName}>{label}</label>
    <div className="input-group">
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
      {optionalButton}
      {errors[fieldName] && touched[fieldName] && (
        <div className="invalid-feedback">{errors[fieldName]}</div>
      )}
    </div>
    {optionalExtraControl}
    <small className="form-text text-muted">{helpText}</small>
  </div>
);

const TokenAirdropForm = ({ onSubmit, disabled }) => {
  const [isScanning, toggleScanning, setScanning] = useToggle(false);
  const onError = err => {
    console.log("Error while scanning address: " + err);
    setScanning(false);
  };

  const handleSubmitAirdrop = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  const handleValidationAirdrop = values => {
    let errors = {};

    if (!values.contractAddress) {
      errors.contractAddress = "Contract address is required";
    } else if (!Web3.utils.isAddress(values.contractAddress)) {
      errors.contractAddress = "Enter a valid contract address";
    }

    return errors;
  };

  const handleCsvData = (data, setFieldValue) => {
    const [addresses, amounts] = data.reduce((acc, curr) => {
      acc[0].push(curr[0]);
      acc[1].push(web3.utils.toWei(curr[1], 'ether'));
      return acc;
    }, [[], []]);
    setFieldValue("airdropData", { addresses, amounts });
  };
  

  return (
    <StyledDiv>
      <div style={{ width: 500, fontSize: 20 }}>
        <Formik
        initialValues={{
          contractAddress: "",
          airdropData: "",
        }}
          validate={handleValidationAirdrop}
          onSubmit={handleSubmitAirdrop}
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
              />
              <Field type="hidden" name="airdropData" />
              <CsvReader onData={(data) => handleCsvData(data,setFieldValue)}/>
              <CreateTokenButton key="airdrop" type="submit" disabled={disabled}>
                Airdrop!
                🚀🌙
              </CreateTokenButton>
            </Form>
          )}
        />
      </div>
    </StyledDiv>
  );
};

export default TokenAirdropForm;
