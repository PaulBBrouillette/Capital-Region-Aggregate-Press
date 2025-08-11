import '../css/HeaderLinksCSS.css';
import PaulPic from '../assets/OtherPics/Paul.JPG';
import LinkedInImage from '../assets/OtherPics/LinkedInLogo.png';
import GitHubImage from '../assets/OtherPics/GitHubLogo.png';

export default function About() {
    return (
        <div id="AllContent">
            <h1>Staff</h1>
            <div class="SingleStaff">
                <div class="NameImage">
                    <h2>Paul Brouillette</h2>
                    <img src={PaulPic} alt="Paul Brouillette"></img>
                </div>
                <div class="RoleBio">
                    <h3>CEO  &#9679; Site Developer &#9679; Journalist &#9679; Swagged out white boy</h3>
                    <p>
                        Paul is the founder of Capital Region Aggregate Press (CRAP) as well as the web dev and a part time journalist.
                        He grew up near the magical city of Utica and now resides in the Capital Region. Albany's alright if you don't mind crackheads and biweekly murders,
                        and it would be easier to go outside during a thunderstorm and try to dodge rain than it would be to avoid potholes on the roads; nontheless, it's his home for at least the time being.
                        He works as a programmer during the day but still finds time to serve the community in his free time by writing quality CRAP articles.
                        While he may not like his job, he can't find another one, and he's too poor to afford a house, he at least has this going for him: 
                    </p>
                    <div class="BioLinks">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulbbrouillette"><img src={LinkedInImage} alt="LinkedIn logo"></img></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/PaulBBrouillette"><img src={GitHubImage} alt="GitHub logo"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}