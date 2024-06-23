import React, { useEffect, useRef } from 'react';
import '../styles/Glow.css';

const Glow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (glowRef.current) {
                glowRef.current.style.left = `${clientX}px`;
                glowRef.current.style.top = `${clientY}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="glow" ref={glowRef}></div>;
};

export default Glow;
