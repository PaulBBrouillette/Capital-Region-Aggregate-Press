import '../css/HeaderLinksCSS.css';
import PaulPic from '../assets/OtherPics/Paul.JPG';
import Leprechaun from '../assets/OtherPics/Leprechaun.jpg'
import LinkedInImage from '../assets/OtherPics/LinkedInLogo.png';
import GitHubImage from '../assets/OtherPics/GitHubLogo.png';
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
            <h1>Staff</h1>
            <div class="SingleStaff">
                <div class="NameImage">
                    <h2>Paul Brouillette</h2>
                    <img src={PaulPic} alt="Paul Brouillette"></img>
                </div>
                <div class="RoleBio">
                    <div class="BioLinks">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulbbrouillette"><img src={LinkedInImage} alt="LinkedIn logo"></img></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/PaulBBrouillette"><img src={GitHubImage} alt="GitHub logo"></img></a>
                    </div>
                    <h3>CEO  &#9679; Site Developer &#9679; Journalist &#9679; Swagged out white boy</h3>
                    <p>
                        Paul is the founder of Capital Region Aggregate Press (CRAP) as well as the site developer and a part time journalist.
                        He grew up near the magical city of Utica and now resides in the Capital Region. Albany's alright if you don't mind crackheads and biweekly murders,
                        and it would be easier to go outside during a thunderstorm and try to dodge rain than it would be to avoid potholes on the roads; nonetheless, it's his home for at least the time being.
                        He works as a programmer during the day but still finds time to serve the community in his free time by writing quality CRAP articles.
                        While he may not like his job, he can't find another one, and he's too poor to afford a house, he at least has this going for him: 
                    </p>
                </div>
            </div>
            <div class="SingleStaff">
                <div class="NameImage">
                    <h2>Ó Maolmhuaidh</h2>
                    <img src={Leprechaun} alt="Ó Maolmhuaidh"></img>
                </div>
                <div class="RoleBio">
                    <h3>Social Media Manager &#9679; Journalist</h3>
                    <p>
                        Hailing from County Sligo, Michael Ó Maolmhuaidh's ancestors came to America seeking new oppurtunities and a better life, what they found was Albany, NY.
                        Ó Maolmhuaidh has worked as a journalist in the past putting out crap articles, but now he pushes out CRAP articles. Our social media accounts 
                        are managed by him, so be nice or he'll start crying. When he does write articles, you're in for a treat because when Ó Maolmhuaidh speaks you shut your ass up and listen. He likes Albany
                        because the miserable weather reminds him of his ancestrial homeland, but he often wonders why his relatives didn't immigrate to Boston instead.
                    </p>
                </div>
            </div>
        </div>
    );
}