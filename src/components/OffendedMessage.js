import '../css/ErrorCSS.css';
import Frown from '../assets/OtherPics/frownFace.png';

export default function OffendedMessage() {
  return (
    <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div id="OffendedMessage">
        <table>
          <tr>
            <th>
              <img src={Frown} alt="IRS logo" />
            </th>
            <th>
              <p><strong>Offended?</strong></p>
              <hr style={{ width: '50%', margin: '0 auto' }}></hr>
              <p><em>Don't be such a snowflake, they're just words!</em></p>
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}