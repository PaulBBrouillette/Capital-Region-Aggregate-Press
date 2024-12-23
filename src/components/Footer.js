import React from 'react'
import '../css/FooterCSS.css';

export default function Footer() {
    return (
        <>
            <footer>
            <img src={process.env.PUBLIC_URL + "/images/logoorange.png"} alt="CRAP logo" />
            </footer>
        </>
    )
}