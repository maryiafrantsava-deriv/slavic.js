import React from 'react'


interface IQRSizeContext {
  example_size: number;
  setExampleSize: (size: number) => void;
}

const initialValues = {
  example_size: 4,
  setExampleSize: () => {}
}

const QRSizeContext = React.createContext<IQRSizeContext>(initialValues);

export default QRSizeContext;