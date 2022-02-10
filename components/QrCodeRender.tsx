import { useContext } from 'react';
import qrCode from '../utils/QrCode';
import { TInitialValuesRegister } from '../components/FormQR/SchemaFormQR';
import QRContext from "../context/QRContext";
import styles from "../styles/QrCodeRender.module.scss";

type TDataQRcode = {
    dataQRcode: TInitialValuesRegister | any;
}

const QRCodeRender = ({dataQRcode}: TDataQRcode) => {
    const { example_size } = useContext(QRContext);
    return (
        <div className={styles["qr-block"]}>
            <div>Here is your QR Code!</div>
            <div dangerouslySetInnerHTML={{__html: qrCode.createVCardQr(dataQRcode, {typeNumber: 20, cellSize: example_size})}}></div>
        </div>
      );  
}

export default QRCodeRender;
