import styles from '../styles/DemoBanner.module.scss';
import React, { useEffect } from 'react';
import Image from "next/image";
import preloader from "../public/images/_preloader.gif";

const DemoBanner = () => {
    useEffect(() =>  {
        const scriptone = document.createElement('script');
        scriptone.src = './canvas_utils/createjs.min.js';
        document.head.append(scriptone);
            
        scriptone.onload = function() {
            const scripttwo = document.createElement('script');
            scripttwo.src='./canvas_utils/qrcode_HTML5Canvas.js';
            document.head.append(scripttwo);
        }
      }, [])

return (
        <div className={styles["banner-container"]}>
            <div id="animation_container" className={styles["animation_container"]}>
                <canvas id="canvas" width="550" height="400" className={styles["banner_canvas"]}/>
                <div id="dom_overlay_container" className={styles["dom_overlay_container"]}/>
                <div id='_preload_div_' className={styles["_preload_div_"]}>	
                <span className={styles["_preload_div_span"]}/>	
                <Image src={preloader} className={styles["_preload_div_preloader"]} />
            </div>
            </div>
        </div>
    );
}

export default DemoBanner;

