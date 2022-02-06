import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useContext, useEffect, useState } from 'react';
import { values_form_qr } from "../../utils/values_form_qr";
import Button from "../common/Button";
import { initialValuesRegister } from "./SchemaFormQR";
import styles from "./FormQR.module.scss";
import QRCodeRender from "../QrCodeRender";
import AddContext from "../../context/AddContext";
import { req_fields_number } from "../../utils/values_form_qr";

interface IFormInput {
    id: string;
    label: string;
    maxLength: number;

}

const FormInput: React.FC<IFormInput> = ({id, label, maxLength}) => (
        <div className={styles["helper-container"]}>
            <Field id={id} type="text" name={id} placeholder={label} maxLength={maxLength} />
            <ErrorMessage name={id} component="div" className={styles["text-danger"]} />
        </div>
    );

export default FormInput;