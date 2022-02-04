import { FC, useState } from "react";
import qrCodeExample from '../../images/qr-code-example.jpeg' 
import Image from "next/image";

interface ImageExapleType  {
    width: string; 
    height: string;
}


const ImageExample: FC<ImageExapleType> = ({width, height}) => {
    return (

            <Image 
                src={qrCodeExample}  
                width={width} 
                height={height}
                alt="qr-code-example" 
            />
        )
    };
  
  export default ImageExample;