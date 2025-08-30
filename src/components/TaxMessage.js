import '../css/ErrorCSS.css';
import IRSLogo from '../assets/OtherPics/IRS.png';;

export default function Error() {
  return (
    <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div id="TaxMessage">
        <table>
          <tr>
            <th>
              <img src={IRSLogo} alt="IRS logo" />
            </th>
            <th>
              <p><strong>YOUR TAX DOLLARS AT WORK!</strong></p>
              <hr style={{ width: '50%', margin: '0 auto' }}></hr>
              <p><em>The contents of this article are paid for with taxpayer money</em></p>
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}