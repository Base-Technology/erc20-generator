import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Web3 from "web3";
import { useToggle } from "./hooks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

library.add(faQrcode);
library.add(faWindowClose);

const StyledDiv = styled.div`
  border: 3px solid #ececec;
  border-radius: 8px;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  width: 800px;
`;

const CreateTokenButton = styled.button`
  font-family: "Lucida Console", Monaco, monospace;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  float: right; /* added */
`;

const networkOptions = [
  { value: "eth", label: "Ethereum Mainnet" },
  // { value: "arb", label: "Arbitrum One" },
  { value: "bsc", label: "BSC Mainnet" },
  { value: "bscTestnet", label: "BSC Testnet" },
  { value: "polygon", label: "Polygon Mainnet" },
  // { value: "op", label: "Optimism" },
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
  hidden,
  setFieldValue
}) => (
  <div
    className={`form-group ${errors[fieldName] && touched[fieldName] ? "text-danger" : null}`}
    hidden={hidden === true? "hidden":""}
    style={{fontSize:16}}
  >
    <label htmlFor={fieldName} style={{fontSize:17, fontWeight:500}}>{label}</label>
    <div className="input-group" style={{fontSize:13}}>
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
        className={`form-control ${errors[fieldName] && touched[fieldName] ? "is-invalid" : null}`}
        type="text"
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        value={values[fieldName]}
        required
      /> )}
      {optionalButton}
      {errors[fieldName] && touched[fieldName] && (
        <div className="invalid-feedback">{errors[fieldName]}</div>
      )}
    </div>
    {optionalExtraControl}
    <small className="form-text text-muted">{helpText}</small>
  </div>
);

const TokenForm = ({ onSubmit, disabled, initialOwner }) => {
  const [isScanning, toggleScanning, setScanning] = useToggle(false);

  const onScan = setFieldValue => result => {
    if (Web3.utils.isAddress(result)) {
      setFieldValue("initialOwner", result);
      setScanning(false);
    }
  };

  const onError = err => {
    console.log("Error while scanning address: " + err);
    setScanning(false);
  };

  const handleSubmitFormik = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };


  const handleValidation = values => {
    let errors = {};

    if (!values.tokenName || values.tokenName.trim() === "") {
      errors.tokenName = "Token name is required";
    } else if (!/^[a-zA-Z0-9 ]{1,20}$/.test(values.tokenName.trim())) {
      errors.tokenName =
        "Token name must contain between 1 and 20 letters, numbers or spaces";
    }

    if (!values.tokenSymbol || values.tokenSymbol.trim() === "") {
      errors.tokenSymbol = "Token symbol is required";
    } else if (!/^[a-zA-Z]{2,10}$/.test(values.tokenSymbol.trim())) {
      errors.tokenSymbol = "Token symbol must contain between 2 and 10 letters";
    }

    if (!values.initialAmount) {
      errors.initialAmount = "Initial amount is required";
    } else if (!/^[0-9]{1,13}$/.test(values.initialAmount)) {
      errors.initialAmount =
        "Amount must be an integer number between 1 and 1000 bi";
    } else {
      const number = parseInt(values.initialAmount);
      if (number < 1 || number > 1000000000000) {
        errors.initialAmount =
          "Amount must be an integer number between 1 and 1000 bi";
      }
    }

    if (!/^[0-9]{1,13}$/.test(values.taxHolder)) {
      errors.taxHolder =
        "Amount must be an integer number between 0 and 10";
    } else {
      const number = parseInt(values.taxHolder);
      if (number < 0 || number > 10) {
        errors.taxHolder =
          "Amount must be an integer number between 0 and 10";
      }
    }

    if (!/^[0-9]{1,13}$/.test(values.taxMarketing)) {
      errors.taxMarketing =
        "Amount must be an integer number between 0 and 10";
    } else {
      const number = parseInt(values.taxMarketing);
      if (number < 0 || number > 10) {
        errors.taxMarketing =
          "Amount must be an integer number between 0 and 10";
      }
    }

    if (!/^[0-9]{1,13}$/.test(values.taxBurn)) {
      errors.taxBurn =
        "Amount must be an integer number between 0 and 10";
    } else {
      const number = parseInt(values.taxBurn);
      if (number < 0 || number > 10) {
        errors.taxBurn =
          "Amount must be an integer number between 0 and 10";
      }
    }

    if (!/^[0-9]{1,13}$/.test(values.taxPool)) {
      errors.taxPool =
        "Amount must be an integer number between 0 and 10";
    } else {
      const number = parseInt(values.taxPool);
      if (number < 0 || number > 10) {
        errors.taxPool =
          "Amount must be an integer number between 0 and 10";
      }
    }

    if (!/^[0-9]{1,13}$/.test(values.taxBack)) {
      errors.taxBack =
        "Amount must be an integer number between 0 and 10";
    } else {
      const number = parseInt(values.taxBack);
      if (number < 0 || number > 10) {
        errors.taxBack =
          "Amount must be an integer number between 0 and 10";
      }
    }

    if (values.network === '') {
      errors.network = "network is nil"
    }

    return errors;
  };
  
  return (
    <StyledDiv>
      <Formik
        initialValues={{
          tokenName: "",
          tokenSymbol: "",
          initialAmount: 1000000000000,
          initialOwner,
          mintingAndBurningSupport: true, // added
          airdropSupport: true,
          taxSupport: false,
          taxHolder: 0,
          taxMarketing: 0,
          taxBurn: 0,
          taxPool: 0,
          taxBack: 0,
          network: "",
        }}
        validate={handleValidation}
        onSubmit={handleSubmitFormik}
        render={({ values, errors, touched, setFieldValue }) => (
          <Form className="needs-validation" noValidate>
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="tokenName"
              label="Token name"
              placeholder="Enter token name"
              helpText="E.g. TestCoin"
              maxLength={20}
              disabled={disabled}
            />
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="tokenSymbol"
              label="Token symbol"
              placeholder="Enter token symbol"
              helpText="E.g. TSC"
              maxLength={10}
              disabled={disabled}
            />
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="initialAmount"
              label="Initial amount"
              placeholder="Enter initial amount"
              helpText="E.g. 1000"
              maxLength={13}
              disabled={disabled}
            />
            <div className="form-group" style={{fontSize:17, fontWeight:500}}>
              <label htmlFor="mintingAndBurningSupport">Minting & Burning Support</label>
              <div className="custom-control custom-switch custom-switch-lg">
                <Field
                  className="custom-control-input"
                  type="checkbox"
                  name="mintingAndBurningSupport"
                  id="mintingAndBurningSupport"
                  checked={values.mintingAndBurningSupport}
                  disabled={true}
                />
                <label className="custom-control-label" htmlFor="mintingAndBurningSupport"></label>
              </div>
            </div>
            <div className="form-group" style={{fontSize:17, fontWeight:500}}>
              <label htmlFor="airdropSupport">Airdrop Support</label>
              <div className="custom-control custom-switch custom-switch-lg">
                <Field
                  className="custom-control-input"
                  type="checkbox"
                  name="airdropSupport"
                  id="airdropSupport"
                  checked={values.airdropSupport}
                />
                <label className="custom-control-label" htmlFor="airdropSupport"></label>
              </div>
            </div>
            <div className="form-group" style={{fontSize:17, fontWeight:500}}>
              <label htmlFor="taxSupport">Tax Support</label>
              <div className="custom-control custom-switch custom-switch-lg">
                <Field
                  className="custom-control-input"
                  type="checkbox"
                  name="taxSupport"
                  id="taxSupport"
                  checked={values.taxSupport}
                />
                <label className="custom-control-label" htmlFor="taxSupport"></label>
              </div>
            </div>
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="taxHolder"
              label="Tax % Back to Holders (reflection)"
              placeholder="[0%, 10%] Enter the percentage of transaction should go towards holders as reflection"
              helpText="E.g. 5"
              maxLength={2}
              disabled={disabled}
              hidden={!values.taxSupport}
            />
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="taxMarketing"
              label="Tax % to Marketing/Charity Wallet"
              placeholder="[0%, 10%] Enter the percentage of transaction should go to Marketing/Development/Charity wallet"
              helpText="E.g. 5"
              maxLength={2}
              disabled={disabled}
              hidden={!values.taxSupport}
            />
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="taxBurn"
              label="Tax % to Burn"
              placeholder="[0%, 10%] Enter the percentage of transaction should be burned"
              helpText="E.g. 5"
              maxLength={2}
              disabled={disabled}
              hidden={!values.taxSupport}
            />
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="taxPool"
              label="Tax % to Liquidity Pool"
              placeholder="[0%, 10%] Enter the percentage of transaction should go towards Liquidity on"
              helpText="E.g. 5"
              maxLength={2}
              disabled={disabled}
              hidden={!values.taxSupport}
            />
            <TokenField
              values={values}
              errors={errors}
              touched={touched}
              fieldName="taxBack"
              label="Tax % to Buyback"
              placeholder="[0%, 10%] Enter the percentage of transaction should be used to buyback tokens when selling on (Hyper-deflation)"
              helpText="E.g. 5"
              maxLength={2}
              disabled={disabled}
              hidden={!values.taxSupport}
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
                hidden={!values.taxSupport}
                setFieldValue={setFieldValue} // added
              />
            <CreateTokenButton key="verify" type="submit" disabled={disabled}>
                Create Token!
                🚀🌙
              </CreateTokenButton>
          </Form>
        )}
      />
    </StyledDiv>
  );
};

export default TokenForm;
