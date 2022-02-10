import styles from '../styles/DemoBanner.module.scss';
import React, { useEffect } from 'react';
import Image from "next/image";
import preloader from "../public/images/_preloader.gif";

const DemoBanner = () => {
    useEffect(() =>  {
        const initLibrary = document.createElement('script');
        initLibrary.src = './canvas_utils/createjs.min.js';
        document.head.append(initLibrary);
            
        initLibrary.onload = function() {
            const generateCanvas = document.createElement('script');
            generateCanvas.src='./canvas_utils/qrcode_HTML5Canvas.js';
            document.head.append(generateCanvas);
        }
      }, [])

return (
        <div className={styles["banner-container"]}>
            <div id="animation_container" className={styles["animation_container"]}>
                <canvas id="canvas" width="550" height="400" className={styles["banner_canvas"]}/>
                <div id="overlay_container" className={styles["overlay_container"]}/>
                <div id='preloader-container' className={styles["preloader-container"]}>	
                    <Image src={preloader} className={styles["preloader-container_spinner"]} alt="preloader"/>
                </div>
            </div>
        </div>
    );
}

export default DemoBanner;

