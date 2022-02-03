import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useContext, useEffect, useState } from 'react';
import { values_form_qr } from "../../utils/values_form_qr";
import Button from "../common/Button";
import { initialValuesRegister } from "./SchemaFormQR";
import styles from "./FormQR.module.scss";
import QRCodeRender from "../QrCodeRender";
import AddContext from "../../context/AddContext";
import { req_fields_number } from "../../utils/values_form_qr";
import FormInput from "./FormInput";

const FormQR: React.FC = React.memo(() => {
    const [dataQRcode, setDataQRcode] = useState({});
    const [isQRCodeReady, setQRCode] = useState(false);
    const { additional_fields } = useContext(AddContext);

    useEffect(() => {
        // disable fields based on that array
        const _register_data = localStorage.getItem("register_data");
        setDataQRcode(() => (_register_data === null ? "" : _register_data));
    }, []);
    let tempisDoubleIdx: number;
    const fields = values_form_qr.map((item, idx) => {
        const {id, common_label, label, maxLength, isDouble, isAdditional} = item;
        const add_field_index = idx - req_fields_number;

        const showFields = () => !isAdditional ? true : additional_fields[add_field_index];

        if (tempisDoubleIdx === idx) return;
        if(isDouble === true) {
            tempisDoubleIdx = idx+1;
            return (
                <div key={id} className={styles["input-wrapper"]}>
                    <p className={styles["helper-label"]}>{common_label}</p>
                    <FormInput id={id} label={label} maxLength={maxLength} />
                    <FormInput
                        id={values_form_qr[idx + 1].id}
                        label={values_form_qr[idx + 1].label}
                        maxLength={values_form_qr[idx + 1].maxLength}
                    />
                </div>
            );
        }else{
            return (
                <>
                    {showFields() && (
                        <div key={id} className={styles["input-wrapper"]}>
                            <p className={styles["helper-label"]}>{common_label}</p>
                            <FormInput
                                id={id}
                                label={label}
                                maxLength={maxLength}
                            />
                        </div>
                    )}
                </>
            );
        }
    });

    return (
        <>
            <Formik
                initialValues={initialValuesRegister}
                // validationSchema={SchemaQR}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    setQRCode(true);
                    // setInputListText(values);
                    setDataQRcode(values);
                    localStorage.setItem("data", JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    {fields}
                    <div className={styles["btn-container"]}>
                        <Button
                            id="btnRegister"
                            className={styles["primary-btn-submit"]}
                            text={"Generate QR code"}
                            type="submit"
                        />
                    </div>
                </Form>
            </Formik>
            {isQRCodeReady ? (
                <QRCodeRender
                    dataQRcode={dataQRcode}
                />
                ): null
            }
        </>
    );
});

FormQR.displayName = "FormQR";

export default FormQR;