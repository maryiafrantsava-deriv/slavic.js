import qrCode from '../utils/QrCode';
import {TInitialValuesRegister} from '../components/FormQR/SchemaFormQR';

type TDataQRcode = {
    dataQRcode: TInitialValuesRegister | any;
}

const QRCodeRender = ({dataQRcode}: TDataQRcode) => (
    <>
        <div dangerouslySetInnerHTML={{__html: qrCode.createVCardQr(dataQRcode, {typeNumber: 4, cellSize: 6})}}>
        </div>
        <div dangerouslySetInnerHTML={{__html: qrCode.createVCard(dataQRcode)}}>
        </div>
    </>
  );

export default QRCodeRender;

