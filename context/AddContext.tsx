import React from 'react'

interface IAddContext {
  additional_fields: Array<boolean>;
  setAdditionalFields: (fields: Array<boolean>) => void;
}

const initialValues = {
  additional_fields : [false, false, false, false, false],
  setAdditionalFields: (data: Array<boolean>) => {}
}

const AddContext = React.createContext<IAddContext>(initialValues);

export default AddContext;