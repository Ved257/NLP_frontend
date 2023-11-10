import React from "react";
import { useEffect, useState, useRef } from "react";
//import TOPOLOGY from "vanta/dist/vanta.topology.min.js";
import GLOBE from "vanta/dist/vanta.globe.min.js";
// import p5 from 'p5'
import * as THREE from "three";
import "./BG.css";

const BG = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            color: 0xb0b86,
            color2: 0xb6aff9,
            backgroundColor: 0x110b21,
            scale: 1.00,
            scaleMobile: 1.00
          })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);
  return (
    <div>
      <div className="home" ref={vantaRef} />
    </div>
  );
};

export default BG;
