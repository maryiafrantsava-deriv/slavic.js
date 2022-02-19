import { Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from 'react';
import { values_form_qr, _workAddress, _socialUrls } from "../../utils/values_form_qr";
import Button from "../common/Button";
import { initialValuesRegister, SchemaQR } from "./SchemaFormQR";
import styles from "./FormQR.module.scss";
import QRCodeRender from "../QrCodeRender";
import AddContext from "../../context/AddContext";
import ThemeContext from "../../context/ThemeContext";
import { req_fields_number } from "../../utils/values_form_qr";
import FormInput from "./FormInput";
import DemoBanner from "../DemoBanner";

const FormQR: React.FC = React.memo(() => {
    const [mounted, setMounted] = useState(false);
    const [isLightTheme, checkIsLightTheme] = useState(false)
    const [dataQRcode, setDataQRcode] = useState({});
    const [isQRCodeReady, setQRCode] = useState(false);
    const { additional_fields } = useContext(AddContext);
    const { active_theme } = useContext(ThemeContext);

    useEffect(() => {
        // disable fields based on that array 
        setMounted(true)
        checkIsLightTheme(localStorage.getItem('theme') === 'light' || active_theme === 'light')        
        const _register_data = localStorage.getItem("register_data");
        setDataQRcode(() => (_register_data === null ? "" : _register_data));
    }, []);

    let tempIsDoubleIdx: number;

    const fields = values_form_qr.map((item, idx) => {
        const {id, name, common_label, label, maxLength, isDouble, isAdditional} = item;
        const add_field_index = idx - req_fields_number;
        const isWorkAddress = name.startsWith("workAddress");
        const isSocialUrls = name.startsWith("socialUrls");

        if (tempIsDoubleIdx === idx) return;
        if(isDouble === true) {
            tempIsDoubleIdx = idx+1;
            return (
                <div key={id} className={styles["input-wrapper"]}>
                    <p className={isLightTheme ? styles["helper-label"] : styles["helper-light"]}>{common_label}</p>
                    <FormInput id={id} name={isWorkAddress? _workAddress[_workAddress.indexOf(name)] : id} label={label} maxLength={maxLength}/>
                    <FormInput
                        id={values_form_qr[idx + 1].id}
                        name={isWorkAddress ? _workAddress[_workAddress.indexOf(name) + 1]: values_form_qr[idx + 1].id}
                        label={values_form_qr[idx + 1].label}
                        maxLength={values_form_qr[idx + 1].maxLength}
                    />
                </div>
            );
        }else{
            const showFields = () => isAdditional ? additional_fields[add_field_index] : true; 
            return (
                <>
                    {showFields() && (
                        <div key={id} className={styles["input-wrapper"]}>
                            <p className={isLightTheme ? styles["helper-label"] : styles["helper-light"]}>{common_label}</p>
                            <FormInput
                                id={id}
                                name={isWorkAddress? _workAddress[_workAddress.indexOf(name)]: isSocialUrls? _socialUrls[_socialUrls.indexOf(name)] : id}
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
            {mounted && (
                <>
                    <Formik
                        initialValues={initialValuesRegister}
                        validationSchema={SchemaQR}
                        onSubmit={async values => {
                            await new Promise(r => setTimeout(r, 500));
                            setQRCode(true);
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
                    <div className={styles.containerRight}>
                        <DemoBanner />
                        {isQRCodeReady ? <QRCodeRender dataQRcode={dataQRcode} /> : null}
                    </div>
                </>
            )}
        </>
    )
        
});

FormQR.displayName = "FormQR";

export default FormQR;