import React from 'react';
import { init_aditional_checked } from "../utils/values_form_qr"

interface IAddContext {
  additional_fields: Array<boolean>;
  setAdditionalFields: (fields: Array<boolean>) => void;
}

const initialValues = {
  additional_fields : init_aditional_checked,
  setAdditionalFields: (data: Array<boolean>) => {}
}

const AddContext = React.createContext<IAddContext>(initialValues);

export default AddContext;