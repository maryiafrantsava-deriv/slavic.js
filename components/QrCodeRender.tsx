import { useContext } from 'react';
import qrCode from '../utils/QrCode';
import {TInitialValuesRegister} from '../components/FormQR/SchemaFormQR';
import QRSizeContext from "../context/Context";

type TDataQRcode = {
    dataQRcode: TInitialValuesRegister | any;
}

const QRCodeRender = ({dataQRcode}: TDataQRcode) => {
    const { example_size } = useContext(QRSizeContext);

    return (
        <>
            <div>Here is your QR Code!</div>
            <div dangerouslySetInnerHTML={{__html: qrCode.createVCardQr(dataQRcode, {typeNumber: 5, cellSize: example_size})}}></div>
        </>
      );  
}

export default QRCodeRender;

