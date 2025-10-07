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
              <p><em>That's really quite a shame, but we really don't care</em></p>
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}