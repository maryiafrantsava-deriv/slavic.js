import { FC, useState, useContext, useEffect } from "react";
import styles from "../../styles/FieldsSelect.module.scss"
import { values_form_qr } from "../../utils/values_form_qr";
import AddContext from "../../context/AddContext";
import { req_fields_number } from "../../utils/values_form_qr";

const FieldsSelect: FC = () => {
    const { setAdditionalFields, additional_fields } = useContext(AddContext);
    const [checkedState, setCheckedState] = useState(new Array(additional_fields.length).fill(false));

    useEffect(() => {
        setCheckedState(additional_fields);
    }, [additional_fields])

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);

        localStorage.setItem('add_fields', JSON.stringify(updatedCheckedState))
        setCheckedState(updatedCheckedState);
        setAdditionalFields(updatedCheckedState);
        
      };

    return (
            <ul className={styles["fields-list"]}>{
                values_form_qr.map(({id, label, isAdditional}, i) => {
                    const add_field_index = i - req_fields_number;

                    return isAdditional ? (
                        <li className={styles["fields-list-item"]} key={i}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${add_field_index}`}
                                    name={id}
                                    value={label}
                                    checked={checkedState[add_field_index]}
                                    onChange={() => handleOnChange(add_field_index)}
                                />
                                <label htmlFor={`custom-checkbox-${add_field_index}`}>{label}</label>
                            </div>
                        </li>
                    ) : null;
                })
            }
            </ul>
        )           
    };
  
  export default FieldsSelect;