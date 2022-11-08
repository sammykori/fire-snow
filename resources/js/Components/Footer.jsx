import React from 'react';
import FooterImage from '../../../public/assets/img/Footer.png'

export default function Footer() {
    return (
        <footer style={{
            backgroundImage: `url(${FooterImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "cover"
        }} className="w-full h-40 bottom-0 left-0 right">
            
        </footer>
        
    );
}
