import React, { useEffect } from 'react';

const Background = () => {
    useEffect(() =>  {
        let boxshadow = "";
        for(let i = 0; i <= 2000; i++){
            const px = Math.random() < 0.5 ? "-" : "";
            const py = Math.random() < 0.5 ? "-" : "";
            const x = Math.floor((Math.random() * window.innerWidth) + 1);
            const y = Math.floor((Math.random() * window.innerHeight) + 1);
            const s = Math.floor((Math.random() * 2) - 1);
            boxshadow += px+x+"px "+py+y+"px 0 "+s+"px #fff,";
        }
        boxshadow = boxshadow.slice(0, -1);
        stars.style.boxShadow = boxshadow;
      }, [])
    return( <div id='stars'></div> );
};

export default Background;