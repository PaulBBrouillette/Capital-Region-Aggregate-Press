import '../css/HeaderLinksCSS.css';
import logo from '../assets/OtherPics/logoblue.png';
import {Helmet} from "react-helmet";

export default function About() {
    return (
        <div id="AllContent">
            <Helmet>
                <title>Capital Region Aggregate Press</title>
                <meta property="og:title" content="Capital Region Aggregate Press" />
                <meta property="og:description" content="The Capital Region's Most Reliable News Site" />
                <meta property="og:image" content={logo} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <h1>About us</h1>
            <p>Capital Region Aggregate Press (C.R.A.P) is the most reliable source for news pertaining to the Capital Region of the glorious state of New York.
                The Capital Region is comprised of the following counties:
            </p>
            <ul>
                <li>Albany</li>
                <li>Columbia</li>
                <li>Fulton</li>
                <li>Greene</li>
                <li>Montgomery</li>
                <li>Rensselaer</li>
                <li>Saratoga</li>
                <li>Schenectady</li>
                <li>Schoharie</li>
                <li>Washington</li>
                <li>and Warren, unfortunately</li>
            </ul>
            <br></br>
            <p>
                We are a small team of journalists with nothing better to do. Hell, we're so small one of the journalists had to write the code for this website too. We all have a penchant for the Capital Region
                and show it through our quality news articles.* We report on a variety of topics from around the Capital Region, everything from potholes on roads,
                to bumps on roads, or roads with cracks, and yes, even roads with asphalt raveling.  
            </p>
            <br></br>
            <p>
                * Note: this is not at all satire. All articles, ads and opinions herein are geniune and not meant
                to poke fun or make merry of current events... HONEST!
            </p>
        </div>
    );
}