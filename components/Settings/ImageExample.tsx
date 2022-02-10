import { FC } from "react";
import Image from "next/image";
interface ImageExapleType  {
    width: string; 
    height: string;
}


const ImageExample: FC<ImageExapleType> = ({width, height}) => {
    return (
            <Image 
                src="/images/qr-code-example.jpeg"   
                width={width} 
                height={height}
                alt="qr-code-example" 
            />
        )
    };
  
  export default ImageExample;