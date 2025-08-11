import '../css/HeaderCSS.css';
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-left">
          <img src={process.env.PUBLIC_URL + "/images/logoblue.png"} alt="CRAP logo" class="logo" title="Yeah that's funny right?" />
        </div>
        <div class="navbar-right">
          <div class="navbar-text">
            <h1 class="title">Capital Region Aggregate Press</h1>
            <p class="subtitle">The Capital Region's number one news site - Kathy Hochul</p>
          </div>
          <ul class="nav-links">
            <li>
              <Link to="/articles/page/1">
                Articles
              </Link>
            </li>
            <li>
              <Link to={`/About`}>
                About
              </Link>
            </li>
            <li>
              <Link to={`/Staff`}>
                Staff
              </Link>
            </li>
            <li>
              <Link to={`/About`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}