import Transaction from './component/Transactions'
import Payment from './component/Payment';
import Upload from './component/Upload';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';


import { useState } from 'react';

function App() {

  const [isTransaction, setIsTransaction] = useState(true);
  const [isPayment, setIsPayment] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-evenly", marginTop:"10px"}}>
        {/* Transaction */}
        <div style={{marginRight: "10px"}}>
          {isTransaction ? <h4 style={{borderBottom:"2px solid blue"}}>Transaction</h4> : <h4 onClick={() => {setIsTransaction(true); setIsPayment(false); setIsUpload(false)}}>Transaction</h4>}
        </div>
        <div>
          {isPayment ? <h4 style={{borderBottom:"2px solid blue"}}>Payment</h4> : <h4 onClick={() => {setIsPayment(true); setIsTransaction(false); setIsUpload(false)}}>Payment</h4>}
        </div>
        <div>
          {isUpload ? <h4 style={{borderBottom:"2px solid blue"}}>Upload</h4> : <h4 onClick={() => {setIsUpload(true); setIsTransaction(false); setIsPayment(false)}}>Upload</h4>}
        </div>
      </div>
      <div className="App">
        {/* <Transaction /> */}
        {isTransaction ? <Transaction /> : null}
        {isPayment ? <Payment /> : null}
        {isUpload ? <Upload /> : null}
      </div>
    </>

  );

}

export default App;
