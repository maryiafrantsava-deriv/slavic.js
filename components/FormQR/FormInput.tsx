import { Field, ErrorMessage } from "formik";
import React from 'react';
import styles from "./FormQR.module.scss";
interface IFormInput {
    id: string;
    name: string;
    label: string;
    maxLength: number;

}

const FormInput: React.FC<IFormInput> = ({id, name, label, maxLength}) => (
        <div key={id} className={styles["helper-container"]}>
            <Field id={id} type={name === "birthday" ? "date" : "text"} name={name} placeholder={label} maxLength={maxLength} />
            <ErrorMessage name={name} component="div" className={styles["text-danger"]} />
        </div>
    );

export default FormInput;