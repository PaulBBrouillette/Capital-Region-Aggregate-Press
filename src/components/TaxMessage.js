import '../css/ErrorCSS.css';

export default function Error() {
  return (
    <div style={{display: 'flex', alginContent: 'center', justifyContent: 'center', width: '100vw'}}>
        <div id="TaxMessage">
            <p><strong>YOUR TAX DOLLARS AT WORK!</strong></p>
            <hr style={{width: '50%', margin: '0 auto'}}></hr>
            <p><em>The contents of this article are paid for with taxpayer money</em></p>
        </div>
    </div>
  )
}