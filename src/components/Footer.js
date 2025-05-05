import React from 'react'
import '../css/FooterCSS.css';

export default function Footer() {
    return (
        <>
            <footer>
                <img src={process.env.PUBLIC_URL + "/images/logoorange.png"} alt="CRAP logo" />
                <p id="copyright">&copy; Capital Region Aggregate Press. All Rights Reserved. Just kidding, you think we have this shit copyrighted?</p>
            </footer>
        </>
    )
}