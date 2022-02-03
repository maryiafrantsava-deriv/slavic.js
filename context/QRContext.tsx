import React from 'react'

interface IQRContext {
  example_size: number;
  setExampleSize: (size: number) => void;
}

const initialValues = {
  example_size: 4,
  setExampleSize: () => {},
}

const QRContext = React.createContext<IQRContext>(initialValues);

export default QRContext;