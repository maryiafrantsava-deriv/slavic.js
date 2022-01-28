import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react';
import { values_form_qr } from "../../utils/values_form_qr";
import Button from "../common/Button";
import { initialValuesRegister } from "./SchemaFormQR";
import styles from "./FormQR.module.scss";
import QRCodeRender from '../QrCodeRender';

const FormQR: React.FC = React.memo(() => {

    const [dataQRcode, setDataQRcode] = useState({});
    const [isQRCodeReady, setQRCode] = useState(false);

    useEffect(() => {
        const _register_data = localStorage.getItem("register_data");
        setDataQRcode(() => (_register_data === null ? "" : _register_data));
    }, []);
    let tempDoubleIdx: number;
    const fields = values_form_qr.map((item, idx) => {
        if (tempDoubleIdx === idx) return;
        if(item.double === true) {
            tempDoubleIdx = idx+1;
            return (
                <div key={item.id} className={styles["input-wrapper"]} >
                    <p className={styles["helper-label"]}>{item.common_label}</p>
                    <div className={styles["helper-container"]}>
                        <Field
                            id={item.id}
                            type="text"
                            name={item.id}
                            placeholder={item.label}
                            maxLength={item.maxLength}
                        />
                        <ErrorMessage
                            name={item.id}
                            component="div"
                            className={styles["text-danger"]}
                        />
                        <Field
                            id={values_form_qr[idx+1].id}
                            type="text"
                            name={values_form_qr[idx+1].id}
                            placeholder={values_form_qr[idx+1].label}
                            maxLength={values_form_qr[idx+1].maxLength}
                        />
                        <ErrorMessage
                            name={values_form_qr[idx+1].id}
                            component="div"
                            className={styles["text-danger"]}
                        />
                    </div>
                </div>
            )
        }else{
            return (
                <div key={item.id} className={styles["input-wrapper"]} >
                    <p className={styles["helper-label"]}>{item.common_label}</p>
                    <div className={styles["helper-container"]}>
                        <Field
                            id={item.id}
                            type="text"
                            name={item.id}
                            placeholder={item.label}
                            maxLength={item.maxLength}
                            className={styles["helper-field"]}
                        />
                        <ErrorMessage
                            name={item.id}
                            component="div"
                            className={styles["text-danger"]}
                        />
                    </div>
                </div>
            )
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